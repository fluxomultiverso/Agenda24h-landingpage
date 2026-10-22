# Agenda 24h — site estático para GitHub Pages

Este pacote contém a página inicial, quatro páginas legais, CSS e logotipo.

## Publicar

1. Extraia o ZIP. Envie **os arquivos e pastas dentro da pasta extraída** para a raiz de um repositório GitHub. `index.html`, `assets/`, `termos/`, `privacidade/`, `cancelamento/` e `compliance/` devem ficar na raiz. Não envie apenas o ZIP.
2. No GitHub, abra **Settings → Pages → Build and deployment**. Em **Source**, escolha **Deploy from a branch**. Selecione a branch `main`, a pasta `/(root)` e clique em **Save**.
3. O endereço de projeto será `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`. A hospedagem de projeto também funciona com os links relativos deste pacote.

Para publicar no endereço atual `multiverso360.lovable.app`, seria necessário editar e publicar o projeto original no Lovable; GitHub Pages usa outro endereço até que você configure um domínio próprio.

Os documentos jurídicos reproduzem os textos publicados na versão antiga da landing page, com data de 29 de maio de 2026. Eles não foram revisados juridicamente. Os botões de compra antigos foram substituídos por contato em `https://wa.me/message/WZS76EXSH2XUH1`.

## Atualizações — 22 de outubro de 2026

### Planos e pagamentos Stripe (produção)

A landing page passou a oferecer três assinaturas, **sem taxa de implantação**:

| Plano | Mensal (renovação a cada mês) | Anual (renovação a cada 12 meses) | Economia anual |
| --- | ---: | ---: | ---: |
| Solo — 1 profissional, 1 administrador | R$ 99 | R$ 990 | R$ 198 (16,7%) |
| Equipe — até 5 profissionais, 1 administrador, 1 recepcionista | R$ 149 | R$ 1.490 | R$ 298 (16,7%) |
| Empresa — até 15 profissionais, 1 administrador, 2 recepcionistas | R$ 299 | R$ 2.990 | R$ 598 (16,7%) |

Foram criados novos produtos e preços de assinatura no Stripe, mantendo os antigos sem exclusão. Os preços anuais foram adicionados aos mesmos produtos e gerados links separados para cada periodicidade. Ambos os formatos são **assinaturas recorrentes**, e o pagamento anual é antecipado.

### Links de pagamento em produção

| Plano | Link mensal | Link anual |
| --- | --- | --- |
| Solo | https://buy.stripe.com/dRm14ngmo2ib63X0WCbbG0b | https://buy.stripe.com/dRm6oHc686yrgIBbBgbbG0e |
| Equipe | https://buy.stripe.com/cNi9ATeeg4qjeAt20GbbG0c | https://buy.stripe.com/eVq9AT1ru8Gz8c5bBgbbG0f |
| Empresa | https://buy.stripe.com/5kQeVdfike0T8c534KbbG0d | https://buy.stripe.com/eVqcN5eegbSL63X0WCbbG0g |

### Mudanças na landing page

- Inclusão de chave seletora **Mensal / Anual**, com mensal selecionado inicialmente.
- Atualização dinâmica dos valores, período de cobrança, destaque de 16,7% de economia, valor economizado em reais e destino do botão de assinatura de cada plano.
- Botões **Assinar Solo**, **Assinar Equipe** e **Assinar Empresa** direcionam para o link Stripe correspondente à periodicidade selecionada.
- Funcionalidades, limites e aparência geral dos três planos preservados; informação **Sem taxa de implantação** incluída.
- Alterações em `index.html` e `assets/site.css`, com layout responsivo.

### Publicação e validação

- Repositório: `fluxomultiverso/Agenda24h-landingpage`, branch `main`, publicação via GitHub Pages.
- Domínio esperado: https://agenda24h.multiverso360.com.br/
- Revisão do código confirmou os seis destinos e o seletor. A publicação e o checkout precisam ser verificados no ambiente público; **não foi realizada compra de teste real**.
- O checkout Stripe utiliza a confirmação padrão após pagamento; o provisionamento/onboarding automático não foi implementado nesta atualização.

> Nota: a referência antiga neste README sobre botões redirecionando apenas ao WhatsApp descreve o estado inicial do projeto, anterior às mudanças desta data.
