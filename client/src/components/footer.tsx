import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-primary">BPC</div>
              <div className="ml-2 text-sm text-background/70">Planejamento & Consultoria</div>
            </div>
            <p className="text-background/70 text-sm">
              Desde 2018 oferecendo soluções em planejamento financeiro e proteção para você e sua família.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/planos-saude" data-testid="link-footer-planos">
                  <a className="hover:text-primary transition-colors">Planos de Saúde</a>
                </Link>
              </li>
              <li>
                <Link href="/seguro-vida" data-testid="link-footer-seguro">
                  <a className="hover:text-primary transition-colors">Seguro de Vida</a>
                </Link>
              </li>
              <li>
                <Link href="/contato" data-testid="link-footer-consultoria">
                  <a className="hover:text-primary transition-colors">Consultoria</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/sobre" data-testid="link-footer-sobre">
                  <a className="hover:text-primary transition-colors">Sobre Nós</a>
                </Link>
              </li>
              <li>
                <Link href="/blog" data-testid="link-footer-blog">
                  <a className="hover:text-primary transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contato" data-testid="link-footer-contato">
                  <a className="hover:text-primary transition-colors">Contato</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p data-testid="text-footer-email">bpcplanejamento@outlook.com</p>
              <p data-testid="text-footer-horario">Segunda a Sexta: 8h às 18h</p>
              <p data-testid="text-footer-atendimento">Atendimento online</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm" data-testid="text-copyright">
            © 2025 BPC Planejamento e Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
