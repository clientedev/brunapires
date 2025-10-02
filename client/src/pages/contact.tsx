import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Clock, MapPin, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Em breve entraremos em contato.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactForm) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-20">

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-contact-info-title">
                Fale Conosco
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Entre em contato conosco para agendar uma consultoria gratuita e sem compromisso. Estamos prontos para ajudar você a encontrar a melhor solução em planos de saúde e seguros de vida.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center" data-testid="contact-email">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <p className="text-muted-foreground">bpcplanejamento@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-location">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Atendimento</h4>
                    <p className="text-muted-foreground">Online em todo o Brasil</p>
                  </div>
                </div>

                <div className="flex items-center" data-testid="contact-whatsapp">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">Clique no botão verde para conversar conosco</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6" data-testid="contact-commitment">
                <h3 className="font-semibold text-foreground mb-3">Nosso Compromisso</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Resposta em até 2 horas durante horário comercial</li>
                  <li>• Consultoria gratuita e sem compromisso</li>
                  <li>• Atendimento personalizado e transparente</li>
                  <li>• Acompanhamento completo do processo</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg" data-testid="card-contact-form">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-form-title">
                    Envie sua Mensagem
                  </h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome completo</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome completo" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="seu@email.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="(11) 99999-9999" 
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Serviço de interesse</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Selecione uma opção" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="plano-saude" data-testid="option-plano-saude">Plano de Saúde</SelectItem>
                                <SelectItem value="seguro-vida" data-testid="option-seguro-vida">Seguro de Vida</SelectItem>
                                <SelectItem value="ambos" data-testid="option-ambos">Ambos os serviços</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem (opcional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Conte-nos mais sobre suas necessidades..."
                                className="resize-none"
                                rows={4}
                                {...field} 
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isSubmitting}
                        data-testid="button-submit-contact"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
