import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { type Post } from "@shared/schema";

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  const { data: featuredPost } = useQuery<Post>({
    queryKey: ["/api/posts/featured"],
  });

  // Fallback posts for display if no real posts exist
  const fallbackArticles = [
    {
      id: "1",
      title: "A Importância da Prevenção na Saúde",
      excerpt: "Descubra como investir em prevenção pode economizar recursos e garantir melhor qualidade de vida para você e sua família.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Dr. Maria Silva",
      createdAt: "2025-01-15T10:00:00Z",
      category: "Saúde Preventiva",
      featured: true,
      published: true,
      content: "",
      updatedAt: "2025-01-15T10:00:00Z"
    },
    {
      id: "2",
      title: "Plano de Saúde para Empresários",
      excerpt: "Guia completo para empresários escolherem o melhor plano de saúde para si e seus funcionários com dicas práticas.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Carlos Santos",
      createdAt: "2025-01-12T10:00:00Z",
      category: "Empresarial",
      featured: false,
      published: true,
      content: "",
      updatedAt: "2025-01-12T10:00:00Z"
    },
    {
      id: "3",
      title: "Seguro de Vida: Quando Contratar?",
      excerpt: "Entenda o momento ideal para contratar um seguro de vida e como escolher a cobertura adequada para sua situação.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Ana Costa",
      createdAt: "2025-01-10T10:00:00Z",
      category: "Seguro de Vida",
      featured: false,
      published: true,
      content: "",
      updatedAt: "2025-01-10T10:00:00Z"
    }
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackArticles;
  const featuredArticle = featuredPost || displayPosts.find(post => post.featured);
  const regularArticles = displayPosts.filter(post => !post.featured);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Carregando posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">📝</div>
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-8" data-testid="text-blog-title">
              Blog BPC
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-blog-description">
              Conteúdo especializado sobre planos de saúde, proteção financeira e consultoria para auxiliar suas decisões mais importantes
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="text-featured-title">
                Artigo em Destaque
              </h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow" data-testid="card-featured-article">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <div className="w-full h-64 lg:h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <div className="text-8xl opacity-30">🎆</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-featured-article-title">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid="text-featured-article-excerpt">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredArticle.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(featuredArticle.createdAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <Button className="self-start" data-testid="button-read-featured">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="text-articles-title">
              Artigos Recentes
            </h2>
            <p className="text-muted-foreground" data-testid="text-articles-description">
              Mantenha-se atualizado com nossas dicas e orientações especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`card-article-${article.id}`}>
                <div className="relative">
                  <img 
                    src={article.imageUrl || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    data-testid={`img-article-${article.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-article-title-${article.id}`}>
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm" data-testid={`text-article-excerpt-${article.id}`}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(article.createdAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-primary hover:bg-primary hover:text-primary-foreground" data-testid={`button-read-article-${article.id}`}>
                    Ler mais →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-newsletter-title">
            Receba Conteúdo Exclusivo
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto" data-testid="text-newsletter-description">
            Inscreva-se em nossa newsletter e receba dicas valiosas sobre saúde e planejamento financeiro diretamente em seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary-foreground focus:border-primary-foreground"
              data-testid="input-newsletter-email"
            />
            <Button variant="secondary" size="lg" className="px-6 py-3 font-semibold" data-testid="button-newsletter-subscribe">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
