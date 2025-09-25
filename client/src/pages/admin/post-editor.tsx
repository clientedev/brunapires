import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Save, Eye, Upload, Trash2 } from "lucide-react";
import { insertPostSchema, updatePostSchema, type Post } from "@shared/schema";
import { z } from "zod";

interface PostEditorProps {
  post?: Post | null;
  onClose: () => void;
}

const formSchema = z.object({
  title: z.string().optional().default(""),
  excerpt: z.string().optional().default(""),
  content: z.string().optional().default(""),
  imageUrl: z.string().url().optional().or(z.literal("")).default(""),
  author: z.string().optional().default(""),
  category: z.string().optional().default(""),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

type FormData = z.infer<typeof formSchema>;

export default function PostEditor({ post, onClose }: PostEditorProps) {
  const { toast } = useToast();
  const isEditing = !!post;
  const [uploadedImage, setUploadedImage] = useState<string | null>(post?.imageUrl || null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      excerpt: post?.excerpt || "",
      content: post?.content || "",
      imageUrl: post?.imageUrl || "",
      author: post?.author || "",
      category: post?.category || "",
      featured: post?.featured || false,
      published: post?.published ?? true,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const url = isEditing ? `/api/admin/posts/${post.id}` : "/api/admin/posts";
      const method = isEditing ? "PUT" : "POST";
      
      const postData = {
        ...data,
        imageUrl: data.imageUrl || null,
      };
      
      const response = await apiRequest(method, url, postData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({
        title: "Sucesso",
        description: isEditing ? "Post atualizado com sucesso!" : "Post criado com sucesso!",
      });
      onClose();
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Erro",
        description: "Falha ao salvar post",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  const categories = [
    "Saúde Preventiva",
    "Empresarial", 
    "Seguro de Vida",
    "Economia",
    "Tecnologia",
    "Autônomos",
    "Dicas",
    "Notícias"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {isEditing ? "Editar Post" : "Novo Post"}
              </h1>
              <p className="text-muted-foreground">
                {isEditing ? "Atualize as informações do post" : "Crie um novo post para o blog"}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={onClose}
                data-testid="button-cancel"
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
              <Button
                type="submit"
                form="post-form"
                disabled={mutation.isPending}
                data-testid="button-save"
              >
                <Save className="w-4 h-4 mr-2" />
                {mutation.isPending ? "Salvando..." : "Salvar"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo do Post</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form id="post-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Título</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Digite o título do post"
                              {...field}
                              data-testid="input-title"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resumo</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Escreva um resumo atrativo do post"
                              rows={3}
                              {...field}
                              data-testid="textarea-excerpt"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Conteúdo</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Escreva o conteúdo completo do post..."
                              rows={12}
                              className="font-mono"
                              {...field}
                              data-testid="textarea-content"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div>
                      <FormLabel>Imagem do Post</FormLabel>
                      <div className="space-y-4">
                        {uploadedImage ? (
                          <div className="relative">
                            <img 
                              src={uploadedImage} 
                              alt="Preview"
                              className="w-full max-w-md h-48 object-cover rounded border"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => {
                                setUploadedImage(null);
                                form.setValue('imageUrl', '');
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground mb-3">
                              Clique para selecionar uma imagem
                            </p>
                            <Input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              id="image-upload"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;

                                setIsUploading(true);
                                try {
                                  const formData = new FormData();
                                  formData.append('image', file);

                                  const response = await fetch('/api/admin/upload', {
                                    method: 'POST',
                                    credentials: 'include',
                                    body: formData,
                                  });

                                  if (response.ok) {
                                    const data = await response.json();
                                    setUploadedImage(data.imageUrl);
                                    form.setValue('imageUrl', data.imageUrl);
                                    toast({
                                      title: "Sucesso",
                                      description: "Imagem enviada com sucesso!",
                                    });
                                  } else {
                                    const error = await response.json();
                                    toast({
                                      title: "Erro",
                                      description: error.message || "Falha ao enviar imagem",
                                      variant: "destructive",
                                    });
                                  }
                                } catch (error) {
                                  toast({
                                    title: "Erro",
                                    description: "Erro de conexão ao enviar imagem",
                                    variant: "destructive",
                                  });
                                } finally {
                                  setIsUploading(false);
                                }
                              }}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              className="mt-2"
                              disabled={isUploading}
                              onClick={() => document.getElementById('image-upload')?.click()}
                            >
                              {isUploading ? "Enviando..." : "Selecionar Imagem"}
                            </Button>
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Formatos aceitos: JPEG, PNG, GIF, WebP. Tamanho máximo: 5MB
                        </p>
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Post Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Form {...form}>
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Autor</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nome do autor"
                            {...field}
                            data-testid="input-author"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-category">
                              <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="featured"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value || false}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-featured"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Post em destaque</FormLabel>
                          <p className="text-xs text-muted-foreground">
                            Aparecerá na seção de destaque do blog
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="published"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value || false}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-published"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Publicar imediatamente</FormLabel>
                          <p className="text-xs text-muted-foreground">
                            O post ficará visível no blog
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />
                </Form>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm">
                      {form.watch("title") || "Título do post..."}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {form.watch("excerpt") || "Resumo do post..."}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>{form.watch("author") || "Autor"}</span>
                    {form.watch("category") && (
                      <span className="bg-muted px-2 py-1 rounded">
                        {form.watch("category")}
                      </span>
                    )}
                  </div>
                  {(uploadedImage || form.watch("imageUrl")) && (
                    <div className="mt-2">
                      <img 
                        src={uploadedImage || form.watch("imageUrl")} 
                        alt="Preview"
                        className="w-full h-20 object-cover rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}