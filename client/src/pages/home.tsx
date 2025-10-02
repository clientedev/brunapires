import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, CheckCircle, Users, TrendingUp, Award, Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import bpcCircularLogo from "@assets/image_1758569899954.png";
import type { Post } from "@shared/schema";

export default function Home() {
  // Buscar os posts mais recentes
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  // Pegar apenas os 3 posts mais recentes
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={bpcCircularLogo} 
                alt="BPC Planejamento e Consultoria em Planos de Saúde" 
                className="h-24 w-24 opacity-80"
                data-testid="img-hero-circular-logo"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight" data-testid="text-hero-title">
              Planos de Saúde e<br />
              <span className="text-primary">Seguros de Vida</span><br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">sob medida</span>
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-medium" data-testid="text-hero-description">
              Consultoria para pessoas e empresas,<br />
              com foco em proteção e tranquilidade.
            </p>
            
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contato">
                <Button size="lg" className="px-12 py-4 text-lg font-semibold shadow-xl" data-testid="button-consultoria-gratuita">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Falar com consultor
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-services-title">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-services-description">
              Oferecemos consultoria especializada em planos de saúde e seguros de vida, com soluções que protegem pessoas e fortalecem empresas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Primary Service - Health Plans */}
            <div className="order-2 lg:order-1" data-testid="section-planos-saude">
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">Planos de Saúde</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Um plano de saúde não é apenas um benefício, é um investimento estratégico. Empresas que oferecem um plano de saúde conquistam mais engajamento e reduzem rotatividade. Na BPC oferecemos consultoria completa, desde a escolha do plano ideal até a conscientização dos colaboradores para um uso responsável.<br /><br /><strong className="text-foreground">Sua equipe saudável, sua empresa sustentável.</strong>
                </p>
                
                <div className="bg-primary/5 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-primary" />
                    Principais Seguradoras e Operadoras
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <span>• Omint</span>
                    <span>• SulAmérica</span>
                    <span>• Amil</span>
                    <span>• Porto Seguro</span>
                    <span>• Bradesco</span>
                    <span>• Alice</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Análise Personalizada</h4>
                      <p className="text-muted-foreground">Avaliação completa das suas necessidades específicas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Comparação de Mercado</h4>
                      <p className="text-muted-foreground">Cotações e comparações das principais operadoras</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Suporte Completo</h4>
                      <p className="text-muted-foreground">Acompanhamento antes, durante e após a contratação</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/contato">
                  <Button size="lg" className="px-8 py-3 font-semibold" data-testid="button-consultor-especializado">
                    Falar com consultor
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 text-center">
              <div className="inline-block p-8 bg-background rounded-full shadow-lg mb-6">
                <Heart className="w-16 h-16 text-primary" />
              </div>
              <h4 className="text-2xl font-display font-semibold text-primary mb-4">Serviço Principal</h4>
              <p className="text-muted-foreground">
                Foco total em encontrar a melhor solução em planos de saúde para cada cliente
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <div className="inline-block p-8 bg-background rounded-full shadow-lg mb-6">
                <Shield className="w-16 h-16 text-primary" />
              </div>
              <h4 className="text-2xl font-display font-semibold text-primary mb-4">Serviço Complementar</h4>
              <p className="text-muted-foreground">
                Proteção financeira adicional para garantir segurança total da família
              </p>
            </div>
            
            {/* Secondary Service - Life Insurance */}
            <div data-testid="section-seguro-vida">
              <div className="bg-background rounded-2xl p-8 border border-border">
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">SEGURO DE VIDA</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Familiar e Individual */}
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-primary" />
                      Familiar e Individual
                    </h4>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        proteção financeira e liquidez imediata para você e sua família em caso de imprevistos tais como:
                      </p>
                      <ul className="text-muted-foreground ml-4 space-y-1">
                        <li>• Diagnósticos de doenças graves, acidentes e cirurgias</li>
                        <li>• Preservação do patrimônio constituído e proteção financeira da família permitindo a continuidade do legado</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empresarial */}
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Empresarial
                    </h4>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        trabalhamos o seguro de vida empresarial como parte da estratégia de proteção e governança corporativa, trazendo claros benefícios para a empresa e sócios, tais como:
                      </p>
                      <ul className="text-muted-foreground ml-4 space-y-1">
                        <li>• Continuidade dos negócios com recursos imediatos para manter a operação</li>
                        <li>• Liquidez para herdeiros e facilitando o acordo entre sócios, reduzindo conflitos</li>
                        <li>• Proteção do patrimônio empresarial</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Link href="/contato">
                  <Button variant="outline" size="lg" className="px-8 py-3 font-semibold border-2" data-testid="button-saiba-mais-protecao">
                    Falar com consultor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-stats-title">
              Por que Escolher a BPC?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-stats-description">
              Nossa trajetória de 20 anos no mercado financeiro e desde 2017 empreendendo no mercado de seguros e planos de saúde, nos permite prestar uma consultoria dedicada que une planejamento, transparência e soluções para sua empresa e sua família.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg border border-border" data-testid="stat-experiencia">
              <div className="text-5xl font-display font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
              <div className="text-sm text-muted-foreground mt-2">no mercado financeiro</div>
            </div>
            
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg border border-border" data-testid="stat-especializacao">
              <div className="text-5xl font-display font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Anos Especializados</div>
              <div className="text-sm text-muted-foreground mt-2">em seguros e planos de saúde</div>
            </div>
            
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg border border-border" data-testid="stat-operadoras">
              <div className="text-5xl font-display font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Operadoras Parceiras</div>
              <div className="text-sm text-muted-foreground mt-2">todas as principais do mercado</div>
            </div>
            
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg border border-border" data-testid="stat-atendimento">
              <div className="text-5xl font-display font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Consultoria Gratuita</div>
              <div className="text-sm text-muted-foreground mt-2">sem custos e sem compromisso</div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
                Nossa Metodologia Consultiva
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Entendimento Profundo</h4>
                  <p className="text-sm text-muted-foreground">Analisamos suas necessidades, perfil de saúde, orçamento e expectativas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Comparação Completa</h4>
                  <p className="text-sm text-muted-foreground">Cotamos todas as operadoras e apresentamos opções com total transparência</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Acompanhamento Contínuo</h4>
                  <p className="text-sm text-muted-foreground">Suporte antes, durante e após a contratação do seu plano</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-blog-title">
              Últimos Artigos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-blog-description">
              Fique por dentro das últimas novidades sobre planos de saúde, seguros de vida e dicas importantes para sua proteção.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-48 bg-muted-foreground/10 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted-foreground/10 animate-pulse rounded mb-4"></div>
                    <div className="h-6 bg-muted-foreground/10 animate-pulse rounded mb-2"></div>
                    <div className="h-4 bg-muted-foreground/10 animate-pulse rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group" data-testid={`card-post-${post.id}`}>
                  {post.imageUrls && post.imageUrls.length > 0 && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrls[0]} 
                        alt={post.title || "Imagem do artigo"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-testid={`img-post-${post.id}`}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span data-testid={`text-date-${post.id}`}>
                        {format(new Date(post.createdAt), "d 'de' MMMM, yyyy", { locale: ptBR })}
                      </span>
                      {post.category && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs" data-testid={`text-category-${post.id}`}>
                            {post.category}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300" data-testid={`text-title-${post.id}`}>
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`text-excerpt-${post.id}`}>
                        {post.excerpt}
                      </p>
                    )}
                    {post.author && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground" data-testid={`text-author-${post.id}`}>
                          Por {post.author}
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg" data-testid="text-no-posts">
                Nenhum artigo publicado ainda. Em breve teremos conteúdo interessante para você!
              </p>
            </div>
          )}

          {recentPosts.length > 0 && (
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button variant="outline" size="lg" className="px-8 py-3 font-semibold border-2" data-testid="button-ver-todos-posts">
                  Ver Todos os Artigos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 backdrop-blur rounded-full mb-6">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-6" data-testid="text-cta-title">
              Pronto para Proteger<br />
              <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">Seu Futuro?</span>
            </h2>
            <div className="w-24 h-1 bg-primary-foreground/40 mx-auto mb-8"></div>
            
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-cta-description">
              Converse com nossos especialistas hoje mesmo. Oferecemos consultoria 100% gratuita para encontrar a proteção ideal para você e sua família, com total transparência e sem compromisso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/contato">
                <Button variant="secondary" size="lg" className="px-12 py-4 text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300" data-testid="button-contato-agora">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Falar com consultor
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
