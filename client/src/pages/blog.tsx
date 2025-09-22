import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "A Importância da Prevenção na Saúde",
      excerpt: "Descubra como investir em prevenção pode economizar recursos e garantir melhor qualidade de vida para você e sua família.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Dr. Maria Silva",
      date: "15 de Janeiro, 2025",
      category: "Saúde Preventiva",
      featured: true
    },
    {
      id: 2,
      title: "Plano de Saúde para Empresários",
      excerpt: "Guia completo para empresários escolherem o melhor plano de saúde para si e seus funcionários com dicas práticas.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Carlos Santos",
      date: "12 de Janeiro, 2025",
      category: "Empresarial"
    },
    {
      id: 3,
      title: "Seguro de Vida: Quando Contratar?",
      excerpt: "Entenda o momento ideal para contratar um seguro de vida e como escolher a cobertura adequada para sua situação.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Ana Costa",
      date: "10 de Janeiro, 2025",
      category: "Seguro de Vida"
    },
    {
      id: 4,
      title: "Como Economizar no Plano de Saúde",
      excerpt: "Estratégias práticas para reduzir custos com plano de saúde sem abrir mão da qualidade no atendimento.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "João Silva",
      date: "8 de Janeiro, 2025",
      category: "Economia"
    },
    {
      id: 5,
      title: "Telemedicina: O Futuro da Saúde",
      excerpt: "Explore como a telemedicina está revolucionando o acesso aos cuidados de saúde e seus benefícios para pacientes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Dra. Patricia Lima",
      date: "5 de Janeiro, 2025",
      category: "Tecnologia"
    },
    {
      id: 6,
      title: "Plano de Saúde para Autônomos",
      excerpt: "Orientações específicas para profissionais autônomos escolherem o plano de saúde mais adequado às suas necessidades.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      author: "Ricardo Ferreira",
      date: "3 de Janeiro, 2025",
      category: "Autônomos"
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

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
                    <span>{featuredArticle.date}</span>
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
                    src={article.image} 
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
                    <span>{article.date}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-cta-blog-title">
            Precisa de Orientação Personalizada?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-blog-description">
            Nossa equipe está pronta para oferecer consultoria especializada e esclarecer todas as suas dúvidas sobre planos de saúde e seguros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="px-8 py-4 font-semibold" data-testid="button-blog-consultation">
                Agendar Consultoria
              </Button>
            </Link>
            <Link href="/planos-saude">
              <Button variant="outline" size="lg" className="px-8 py-4 font-semibold" data-testid="button-blog-plans">
                Ver Planos Disponíveis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
