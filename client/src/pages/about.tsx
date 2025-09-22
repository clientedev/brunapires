import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business team consultation" 
                className="rounded-xl shadow-xl w-full h-auto"
                data-testid="img-about-team"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
                Sobre a BPC
              </h1>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-history">
                Desde 2018 no mercado, a BPC Planejamento e Consultoria construiu uma trajetória sólida baseada na confiança, transparência e comprometimento com nossos clientes.
              </p>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-expansion">
                Em 2025, expandimos nossa atuação para o segmento de planos de saúde, trazendo toda nossa experiência em consultoria para oferecer soluções personalizadas que realmente atendem às necessidades de cada cliente.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center" data-testid="stat-anos">
                  <div className="text-3xl font-bold text-primary mb-2">7+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div className="text-center" data-testid="stat-clientes-atendidos">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes atendidos</div>
                </div>
                <div className="text-center" data-testid="stat-satisfacao-clientes">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start" data-testid="diferencial-consultivo">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Atendimento Consultivo</h4>
                    <p className="text-muted-foreground">Não vendemos apenas produtos, oferecemos soluções personalizadas</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="diferencial-transparencia">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Transparência Total</h4>
                    <p className="text-muted-foreground">Explicamos todos os detalhes para você tomar a melhor decisão</p>
                  </div>
                </div>
                <div className="flex items-start" data-testid="diferencial-parceria">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Parceria de Longo Prazo</h4>
                    <p className="text-muted-foreground">Acompanhamento completo antes, durante e após a contratação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-mission-title">
              Nossa Missão e Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-mission-description">
              Construímos relacionamentos duradouros baseados na confiança e no comprometimento com o bem-estar de nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="card-missao">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Oferecer consultoria especializada em proteção financeira e saúde, proporcionando segurança e tranquilidade para nossos clientes através de soluções personalizadas.
              </p>
            </div>

            <div className="text-center" data-testid="card-visao">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser reconhecida como a principal referência em consultoria de planos de saúde e seguros, conhecida pela excelência no atendimento e resultados.
              </p>
            </div>

            <div className="text-center" data-testid="card-valores">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Transparência, integridade, comprometimento com o cliente, excelência no atendimento e busca contínua pela melhor solução.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Approach Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8" data-testid="text-approach-title">
              Nossa Abordagem
            </h2>
            <p className="text-lg text-muted-foreground mb-12" data-testid="text-approach-description">
              Acreditamos que cada cliente é único e merece uma solução personalizada. Por isso, nosso processo de consultoria é cuidadosamente estruturado para entender suas necessidades específicas e oferecer as melhores alternativas do mercado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="step-analise">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">Análise</h4>
                <p className="text-sm text-muted-foreground">Entendemos suas necessidades e perfil</p>
              </div>

              <div className="text-center" data-testid="step-comparacao">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">Comparação</h4>
                <p className="text-sm text-muted-foreground">Comparamos opções do mercado</p>
              </div>

              <div className="text-center" data-testid="step-proposta">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Proposta</h4>
                <p className="text-sm text-muted-foreground">Apresentamos a melhor solução</p>
              </div>

              <div className="text-center" data-testid="step-acompanhamento">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-foreground mb-2">Acompanhamento</h4>
                <p className="text-sm text-muted-foreground">Suporte contínuo pós-contratação</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
