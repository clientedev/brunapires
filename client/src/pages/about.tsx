import bpcCircularLogo from "@assets/image_1758569899954.png";

export default function About() {
  return (
    <div className="pt-20">
      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={bpcCircularLogo} 
                alt="BPC Logo" 
                className="h-24 w-24 opacity-80"
                data-testid="img-about-logo"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-8" data-testid="text-about-title">
              Sobre a BPC
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-history">
                Desde <strong>2018</strong> construímos uma trajetória sólida no mercado de consultoria financeira, baseada na <strong>confiança, transparência e comprometimento</strong> com nossos clientes.
              </p>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed" data-testid="text-about-expansion">
                Nossa especialidade em <strong>planos de saúde</strong> representa mais de 7 anos de experiência oferecendo soluções personalizadas que realmente atendem às necessidades de cada cliente. Complementamos nosso portfólio com <strong>seguros de vida</strong> para proteção financeira completa.
              </p>
            </div>
              
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              <div className="text-center" data-testid="stat-anos">
                <div className="text-4xl font-display font-bold text-primary mb-2">2018</div>
                <div className="text-sm font-medium text-muted-foreground">Fundação da BPC</div>
              </div>
              <div className="text-center" data-testid="stat-clientes-atendidos">
                <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
                <div className="text-sm font-medium text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center" data-testid="stat-satisfacao-clientes">
                <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
                <div className="text-sm font-medium text-muted-foreground">Satisfação dos Clientes</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-consultivo">
                <div className="text-5xl mb-6">💼</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Abordagem Consultiva</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Não vendemos produtos, oferecemos soluções. Cada cliente recebe uma análise personalizada e recomendações baseadas em suas necessidades específicas.
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-transparencia">
                <div className="text-5xl mb-6">🔍</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Transparência Total</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Explicamos todos os detalhes, coberturas, carências e custos de forma clara para que você tome a decisão mais informada possível.
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-parceria">
                <div className="text-5xl mb-6">🤝</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Relacionamento Duradouro</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhamento completo antes, durante e após a contratação. Construímos parcerias de longo prazo com nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-mission-title">
                Nossa Essência
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-mission-description">
                Os princípios que guiam nossa consultoria e definem nosso compromisso com a excelência no atendimento
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-missao">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer consultoria especializada em planos de saúde e proteção financeira, proporcionando segurança e tranquilidade através de soluções verdadeiramente personalizadas.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-visao">
                <div className="text-5xl mb-6">🔮</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a principal referência em consultoria de planos de saúde no Brasil, conhecida pela excelência no atendimento e resultados excepcionais.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-valores">
                <div className="text-5xl mb-6">⭐</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Transparência</strong> em todos os processos, <strong>integridade</strong> nas recomendações, <strong>comprometimento</strong> com o cliente e <strong>excelência</strong> no atendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-approach-title">
              Como Trabalhamos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed" data-testid="text-approach-description">
              Nosso processo consultivo é estruturado para garantir que cada cliente receba a solução mais adequada às suas necessidades específicas
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="step-analise">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-display font-bold text-primary">1</div>
                </div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Análise</h4>
                <p className="text-muted-foreground">Entendimento profundo das suas necessidades, perfil e orçamento</p>
              </div>

              <div className="text-center" data-testid="step-comparacao">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-display font-bold text-primary">2</div>
                </div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Comparação</h4>
                <p className="text-muted-foreground">Análise comparativa de todas as opções disponíveis no mercado</p>
              </div>

              <div className="text-center" data-testid="step-proposta">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-display font-bold text-primary">3</div>
                </div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Proposta</h4>
                <p className="text-muted-foreground">Apresentação da solução ideal com transparência total</p>
              </div>

              <div className="text-center" data-testid="step-acompanhamento">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-display font-bold text-primary">4</div>
                </div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">Acompanhamento</h4>
                <p className="text-muted-foreground">Suporte contínuo durante todo o relacionamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
