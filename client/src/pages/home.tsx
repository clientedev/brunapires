import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, CheckCircle, Users, TrendingUp, Award, Phone, MessageCircle } from "lucide-react";
import bpcCircularLogo from "@assets/image_1758569899954.png";

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
                alt="BPC Planejamento e Consultoria em Planos de Saúde" 
                className="h-24 w-24 opacity-80"
                data-testid="img-hero-circular-logo"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8" data-testid="text-hero-title">
              Planejamento consultivo em<br />
              <span className="text-primary">Planos de Saúde e Seguros de Vida</span><br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">— do individual ao corporativo.</span>
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
              Com experiência e visão estratégica, ajudamos negócios e pessoas a cuidarem do que mais importa: <strong className="text-foreground">segurança, bem-estar e continuidade</strong>.
            </p>
            
            <div className="bg-background/80 backdrop-blur border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Consultoria 100% Gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sem Compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Total Transparência</span>
                </div>
              </div>
            </div>
            
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
              Especialistas em Planos de Saúde
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
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nossa especialidade principal desde 2018. Somos experts em analisar seu perfil médico, comparar todas as operadoras do mercado e encontrar o plano ideal com o melhor custo-benefício.
                </p>
                
                <div className="bg-primary/5 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-primary" />
                    Principais Operadoras que Trabalhamos
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <span>• Unimed</span>
                    <span>• SulAmérica</span>
                    <span>• Bradesco Saúde</span>
                    <span>• NotreDame Intermédica</span>
                    <span>• Hapvida</span>
                    <span>• E muitas outras</span>
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
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Serviço complementar que oferecemos para garantir proteção financeira completa. Enquanto o plano de saúde cuida da sua saúde, o seguro de vida protege financeiramente sua família.
                </p>
                
                <div className="bg-background/50 rounded-xl p-4 mb-6 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary" />
                    Modalidades de Seguro Disponíveis
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></div>
                      <span><strong>Individual:</strong> Proteção pessoal básica e invalidez</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></div>
                      <span><strong>Familiar:</strong> Cobertura estendida com auxílio educação</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></div>
                      <span><strong>Empresarial:</strong> Benefícios corporativos para equipes</span>
                    </div>
                  </div>
                </div>
                
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
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6" data-testid="text-stats-title">
              Por que Escolher a BPC?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-stats-description">
              Nossa trajetória de sucesso construída com dedicação, expertise e comprometimento real com cada cliente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background/80 backdrop-blur border border-primary/20 rounded-2xl p-8 text-center shadow-lg" data-testid="stat-experiencia">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-5xl font-display font-bold text-primary mb-3">7+</div>
              <div className="text-lg font-medium text-foreground mb-2">Anos de Experiência</div>
              <div className="text-muted-foreground text-sm">Especialização contínua no mercado de planos de saúde</div>
            </div>
            <div className="bg-background/80 backdrop-blur border border-primary/20 rounded-2xl p-8 text-center shadow-lg" data-testid="stat-clientes">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-5xl font-display font-bold text-primary mb-3">500+</div>
              <div className="text-lg font-medium text-foreground mb-2">Clientes Atendidos</div>
              <div className="text-muted-foreground text-sm">Famílias e empresas com proteção personalizada</div>
            </div>
            <div className="bg-background/80 backdrop-blur border border-primary/20 rounded-2xl p-8 text-center shadow-lg" data-testid="stat-satisfacao">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-5xl font-display font-bold text-primary mb-3">98%</div>
              <div className="text-lg font-medium text-foreground mb-2">Índice de Satisfação</div>
              <div className="text-muted-foreground text-sm">Clientes que recomendam nossos serviços</div>
            </div>
          </div>

          {/* Exclusive Benefits */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">Benefícios Exclusivos BPC</h3>
              <p className="text-lg text-muted-foreground">O que você só encontra aqui</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Análise Médica Personalizada</h4>
                    <p className="text-sm text-muted-foreground">Avaliamos seu histórico médico para encontrar operadoras que melhor atendem suas necessidades específicas</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Acompanhamento Vitalício</h4>
                    <p className="text-sm text-muted-foreground">Suporte contínuo mesmo após a contratação: reajustes, mudanças, dúvidas e renovações</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Consultoria Familiar Completa</h4>
                    <p className="text-sm text-muted-foreground">Analisamos toda a família para encontrar a melhor estratégia de proteção com economia escalonada</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Comparativo Transparente</h4>
                    <p className="text-sm text-muted-foreground">Relatório detalhado comparando todas as opções com prós, contras e recomendação justificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  Consultoria Gratuita Agora
                </Button>
              </Link>
              <Link href="/planos-saude">
                <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-semibold bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300" data-testid="button-ver-planos">
                  <Phone className="mr-3 h-5 w-5" />
                  Ver Planos Disponíveis
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4 border border-primary-foreground/20">
                <div className="text-primary-foreground font-semibold mb-1">✓ Consultoria Gratuita</div>
                <div className="text-primary-foreground/70 text-sm">Análise sem nenhum custo</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4 border border-primary-foreground/20">
                <div className="text-primary-foreground font-semibold mb-1">✓ Sem Compromisso</div>
                <div className="text-primary-foreground/70 text-sm">Você decide quando contratar</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4 border border-primary-foreground/20">
                <div className="text-primary-foreground font-semibold mb-1">✓ Total Transparência</div>
                <div className="text-primary-foreground/70 text-sm">Explicamos tudo claramente</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
