import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, CheckCircle, Users, TrendingUp, Award, Phone, MessageCircle } from "lucide-react";
import bpcCircularLogo from "@assets/image_1758563943976.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={bpcCircularLogo} 
                alt="BPC Logo" 
                className="h-24 w-24 opacity-80"
                data-testid="img-hero-circular-logo"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8" data-testid="text-hero-title">
              Consultoria Financeira<br />
              <span className="text-primary">&amp; Plano de Saúde</span>
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-2xl font-display font-medium text-foreground mb-4" data-testid="text-hero-tagline">
              Seu futuro e saúde planejados com cuidado
            </p>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="text-hero-description">
              Desde 2018 oferecemos consultoria especializada com transparência e comprometimento. 
              Encontramos as melhores soluções do mercado para proteger você e sua família.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/contato">
                <Button size="lg" className="px-12 py-4 text-lg font-semibold shadow-xl" data-testid="button-consultoria-gratuita">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Solicitar Consultoria Gratuita
                </Button>
              </Link>
              <Link href="/planos-saude">
                <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-semibold border-2" data-testid="button-cotacao">
                  <Phone className="mr-3 h-5 w-5" />
                  Peça sua Cotação
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center" data-testid="credential-experiencia">
                <div className="text-3xl font-display font-bold text-primary mb-2">7+</div>
                <div className="text-sm font-medium text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center" data-testid="credential-clientes">
                <div className="text-3xl font-display font-bold text-primary mb-2">500+</div>
                <div className="text-sm font-medium text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center" data-testid="credential-satisfacao">
                <div className="text-3xl font-display font-bold text-primary mb-2">98%</div>
                <div className="text-sm font-medium text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-services-title">
              Especialistas em Planejamento Financeiro
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-services-description">
              Com mais de 7 anos de experiência, oferecemos consultoria especializada para encontrar as melhores soluções em planos de saúde e proteção financeira
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Primary Service - Health Plans */}
            <div className="order-2 lg:order-1" data-testid="section-planos-saude">
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">Planos de Saúde</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nossa especialidade principal. Analisamos seu perfil, comparamos operadoras e encontramos o plano ideal para você, sua família ou empresa, sempre com transparência total sobre coberturas, carências e custos.
                </p>
                
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
                
                <Link href="/planos-saude">
                  <Button size="lg" className="px-8 py-3 font-semibold" data-testid="button-consultor-especializado">
                    Falar com Especialista
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
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">Seguro de Vida</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Complemento estratégico ao seu plano de saúde. Oferecemos as melhores opções em seguros de vida para garantir proteção financeira completa para sua família.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Individual</div>
                    <div className="text-sm text-muted-foreground">Proteção pessoal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Familiar</div>
                    <div className="text-sm text-muted-foreground">Toda a família</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Empresarial</div>
                    <div className="text-sm text-muted-foreground">Sua equipe</div>
                  </div>
                </div>
                
                <Link href="/seguro-vida">
                  <Button variant="outline" size="lg" className="px-8 py-3 font-semibold border-2" data-testid="button-saiba-mais-protecao">
                    Saiba Mais sobre Proteção
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-stats-title">
              Números que Falam por Si
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-stats-description">
              Nossa trajetória de sucesso construída com dedicação e comprometimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="stat-experiencia">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center" data-testid="stat-clientes">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clientes atendidos</div>
            </div>
            <div className="text-center" data-testid="stat-satisfacao">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-cta-title">
            Pronto para Proteger Seu Futuro?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar você a encontrar a proteção ideal para você e sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button variant="secondary" size="lg" className="px-8 py-4 font-semibold" data-testid="button-contato-agora">
                Entre em Contato Agora
              </Button>
            </Link>
            <Link href="/planos-saude">
              <Button variant="outline" size="lg" className="px-8 py-4 font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-ver-planos">
                Ver Planos Disponíveis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
