# Fitness Design System
## Style Guide & Design Tokens
 
---
 
## 1. Concept and Style
 
Este sistema de design foi construído a partir de um universo visual de **performance, intensidade e transformação**. A estética combina o rigor técnico de produtos digitais modernos com a energia crua do universo fitness — resultando em uma linguagem visual que é ao mesmo tempo **agressiva e sofisticada**, **impactante e funcional**.
 
O sistema opera em dois modos visuais dominantes: **dark-first** (fundos profundos em preto/grafite com acentos vibrantes) e **accent-dominant** (onde a cor de destaque toma o protagonismo em heroes e seções de alto impacto). A tipografia é **display-heavy**, com grandes blocos de texto que funcionam como elementos gráficos por si só.
 
**Keywords:** `high-contrast` · `bold-display` · `dark-performance` · `energetic` · `structured` · `cinematic`
 
---
 
## 2. Color System
 
### 2.1 Primitive Colors
 
#### Neutral Scale
 
| Token              | HEX       | Uso                          |
|--------------------|-----------|-------------------------------|
| `neutral-950`      | `#0A0A0A` | Background principal (black)  |
| `neutral-900`      | `#111111` | Background dark primário      |
| `neutral-850`      | `#181818` | Background dark secundário    |
| `neutral-800`      | `#1E1E1E` | Cards / superfícies elevadas  |
| `neutral-750`      | `#252525` | Cards hover / bordas sutis    |
| `neutral-700`      | `#2D2D2D` | Separadores / bordas          |
| `neutral-600`      | `#3A3A3A` | Elementos desabilitados       |
| `neutral-400`      | `#6B6B6B` | Texto terciário / placeholder |
| `neutral-200`      | `#B0B0B0` | Texto secundário / subheading |
| `neutral-100`      | `#D4D4D4` | Texto de suporte              |
| `neutral-50`       | `#F5F5F5` | Texto primário em fundo dark  |
| `white`            | `#FFFFFF` | Texto principal / headings    |
 
#### Core Base Colors
 
| Token              | HEX       | Família                       |
|--------------------|-----------|-------------------------------|
| `lime-500`         | `#C8F135` | Verde-Lima vibrante (primário) |
| `lime-400`         | `#D4F55A` | Verde-Lima claro               |
| `lime-600`         | `#A8D41A` | Verde-Lima escuro (hover)      |
| `lime-bg`          | `#EBFF47` | Verde-Lima para fundos hero    |
| `orange-500`       | `#FF6B1A` | Laranja energético             |
| `orange-400`       | `#FF8340` | Laranja claro                  |
| `orange-600`       | `#E05510` | Laranja escuro (hover)         |
| `cyan-400`         | `#00E5FF` | Ciano tech (acento alternativo)|
| `red-600`          | `#CC1A1A` | Vermelho intenso               |
| `red-500`          | `#E02020` | Vermelho energético            |
 
---
 
### 2.2 Semantic Colors
 
| Role         | Token de Referência  | HEX       | Comportamento                                                                 |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------|
| **Primary**  | `lime-500`           | `#C8F135` | CTA principal, botões de ação, destaques de heading. Máximo impacto visual.  |
| **Secondary**| `orange-500`         | `#FF6B1A` | Variante de acento. Usado em seções "About", pricing destacado, labels.      |
| **Accent**   | `cyan-400`           | `#00E5FF` | Tech-forward, usado em ícones e elementos interativos de alto contraste.     |
| **Surface**  | `neutral-800`        | `#1E1E1E` | Cards, modais, navbars em contexto dark.                                     |
| **On-Dark**  | `white`              | `#FFFFFF` | Texto sobre fundos dark.                                                     |
| **On-Light** | `neutral-950`        | `#0A0A0A` | Texto sobre fundos claros (hero com lime, seções brancas).                   |
| **Success**  | `lime-600`           | `#A8D41A` | Checkmarks, confirmações, itens de lista de benefícios.                      |
| **Warning**  | `orange-400`         | `#FF8340` | Alertas, badges de destaque.                                                 |
| **Error**    | `red-500`            | `#E02020` | Estados de erro, validações.                                                 |
 
> **Regra de uso:** O sistema não mistura `lime` e `orange` na mesma seção como cores de destaque. Cada seção adota **uma** cor de acento para manter o foco visual. `lime` domina contextos de ação e performance. `orange` domina contextos de credibilidade e nutrição/transformação.
 
---
 
## 3. Typography
 
### 3.1 Estilo Geral
 
O sistema tipográfico é **Display-first**. Os headings funcionam como peças gráficas — ocupam grande parte do viewport, mesclam cores (branco + acento) na mesma frase, e são usados com peso máximo (Black/ExtraBold 800–900). O sistema se apoia em uma **sans-serif condensada ou expanded** de alta legibilidade e impacto.
 
- **Display Font:** Sans-serif ultra-bold, geométrica ou condensada. Alto contraste entre fino e grosso. Sugerido: `Barlow Condensed`, `Bebas Neue`, `Dharma Gothic`, `Anton` ou equivalente.
- **Body Font:** Grotesk neutro, sem serifa, legível em tamanhos pequenos. Sugerido: `DM Sans`, `Plus Jakarta Sans`, `Outfit` ou equivalente.
---
 
### 3.2 Hierarquia Tipográfica
 
| Nível      | Tamanho     | Peso        | Cor padrão           | Uso                                      |
|------------|-------------|-------------|----------------------|------------------------------------------|
| `H1`       | 72–96px     | 800–900     | `white` + acento     | Hero headlines. Mistura de cor na frase. |
| `H2`       | 48–64px     | 700–800     | `white` + acento     | Section titles. Palavra-chave em acento. |
| `H3`       | 28–36px     | 600–700     | `white`              | Card titles, subtítulos de seção.        |
| `H4`       | 20–24px     | 600         | `white` ou acento    | Labels de card, nomes de plano.          |
| `Body`     | 14–16px     | 400         | `neutral-200`        | Parágrafos e descrições.                 |
| `Caption`  | 11–13px     | 400–500     | `neutral-400`        | Metadados, labels secundários.           |
| `Overline` | 11–13px     | 600         | acento (cor)         | Labels de seção acima do H2 (ex: "About Us", "Subscriptions"). Uppercase, letter-spacing: 0.12em. |
| `Stat`     | 48–64px     | 700–800     | `white` + `+` em acento | Números de prova social e métricas.  |
 
### 3.3 Padrões de Destaque em Heading
 
O sistema usa um padrão recorrente onde **palavras-chave dentro do heading recebem a cor de acento**, enquanto o restante permanece em branco. Isso cria ritmo visual e guia o olhar sem necessitar de elementos gráficos adicionais.
 
```
"YOUR [FITNESS] JOURNEY STARTS HERE"
 white  [orange]  white
```
 
### 3.4 Spacing Tipográfico
 
- **Letter-spacing em H1/H2:** `-0.02em` a `0em` (tight ou neutro)
- **Letter-spacing em Overline:** `+0.10em` a `+0.15em`
- **Line-height em headings:** `0.9` a `1.05` (ultra-tight para impacto)
- **Line-height em body:** `1.5` a `1.65`
---
 
## 4. Spacing and Layout
 
### 4.1 Spacing Scale
 
Base unit: **8px**
 
| Token        | Valor  | Uso típico                                    |
|--------------|--------|-----------------------------------------------|
| `space-1`    | 4px    | Micro gaps, padding interno de badges         |
| `space-2`    | 8px    | Gaps entre ícone e texto, padding mini        |
| `space-3`    | 12px   | Padding interno de chips/tags                 |
| `space-4`    | 16px   | Padding interno de cards (small)              |
| `space-5`    | 20px   | Espaço entre elementos em linha               |
| `space-6`    | 24px   | Padding de cards padrão                       |
| `space-8`    | 32px   | Gap entre cards, padding de seções menores    |
| `space-10`   | 40px   | Gap entre grupos de elementos                 |
| `space-12`   | 48px   | Padding vertical de seções médias             |
| `space-16`   | 64px   | Padding vertical de seções principais         |
| `space-20`   | 80px   | Margem entre seções                           |
| `space-24`   | 96px   | Seções hero e de alto impacto                 |
| `space-32`   | 128px  | Máxima separação em layouts editorial         |
 
### 4.2 Layout e Grid
 
- **Grid:** 12 colunas com gutter de 24px
- **Max-width de container:** 1280px
- **Margem lateral mínima:** 80px (desktop) / 20px (mobile)
- **Densidade:** Balanceada — seções de texto são espaçosas; grids de cards são compactos com ritmo uniforme
### 4.3 Padrões de Composição
 
- **Hero:** Full-width com imagem de fundo ou fotografia de atleta sobreposta ao texto. Tipografia gigante se integra visualmente à imagem (texto "por trás" e "na frente" da foto).
- **Feature Grid:** 3–4 colunas simétricas, cards com imagem no topo e CTA na base.
- **Stats Row:** Horizontal, 4 métricas em linha com número grande + label abaixo. `+` em cor de acento.
- **Pricing Cards:** 3 colunas, card central destacado com fundo em cor de acento ou gradiente.
---
 
## 5. Shapes and UI Language
 
### 5.1 Border Radius
 
| Token              | Valor     | Aplicação                                      |
|--------------------|-----------|------------------------------------------------|
| `radius-sm`        | 8px       | Badges, chips pequenos, inputs                 |
| `radius-md`        | 12px      | Cards secundários                              |
| `radius-lg`        | 16px      | Cards principais, pricing cards                |
| `radius-xl`        | 20–24px   | Cards hero, imagens em card                    |
| `radius-2xl`       | 32px      | Navbar pill, containers arredondados           |
| `radius-pill`      | 9999px    | Botões CTA principais, badges de label         |
| `radius-sharp`     | 0–4px     | Elementos editoriais de alto impacto (hero text blocks) |
 
> O sistema usa **pill** para a maioria dos botões de ação — isso transmite energia e modernidade. Cards usam `radius-lg` a `radius-xl` para suavidade visual sem perder o rigor.
 
### 5.2 Stroke e Bordas
 
- Bordas são usadas como **delimitadores sutis**, não como estilo dominante
- `border: 1px solid neutral-700` para cards em contexto dark
- Botões secundários usam borda em `neutral-600` com fundo transparente
- Bordas em cor de acento são reservadas para estados de **foco/seleção** ou cards em destaque
### 5.3 Component Style
 
- **Flat com elevação sugerida:** Cards têm fundo ligeiramente mais claro que o background, sem sombras pesadas — a profundidade vem da diferença de cor, não de shadow
- **Ícones em containers circulares:** Ícones de feature ficam dentro de círculos escuros com fundo em `neutral-850`
- **Botão primário:** Fundo em cor de acento sólida (`lime-500` ou `orange-500`), texto em `neutral-950`, `radius-pill`, peso 700
- **Botão secundário:** Fundo `neutral-750` ou transparente com borda, texto em `white`
- **Imagens em card:** Posição topo do card com `overflow: hidden` e `border-radius` herdado
---
 
## 6. Visual Details
 
### 6.1 Shadows
 
| Token              | Valor CSS                                          | Uso                                     |
|--------------------|----------------------------------------------------|-----------------------------------------|
| `shadow-none`      | `none`                                             | Cards planos em background dark         |
| `shadow-soft`      | `0 4px 16px rgba(0,0,0,0.3)`                       | Cards com leve elevação                 |
| `shadow-card`      | `0 8px 32px rgba(0,0,0,0.5)`                       | Cards destacados, pricing featured      |
| `shadow-glow-lime` | `0 0 24px rgba(200,241,53,0.25)`                   | Botões CTA em hover, elementos ativos   |
| `shadow-glow-orange`| `0 0 24px rgba(255,107,26,0.3)`                   | Botões CTA variante laranja em hover    |
| `shadow-glow-cyan` | `0 0 20px rgba(0,229,255,0.2)`                     | Elementos tech/interactive              |
 
### 6.2 Decorações e Efeitos
 
- **Gradientes:** Usados em cards de destaque (pricing, hero). Gradiente de `orange-600` para `neutral-900` no card featured de pricing. Hero pode usar gradiente de `lime-bg` para `white`.
- **Overlay em imagens:** Gradiente escuro de `transparent` para `neutral-900` na base de cards com foto, garantindo legibilidade do texto.
- **Efeito de texto como fundo:** Em heroes, palavras de heading gigantes aparecem como elemento decorativo atrás do conteúdo principal (ex: "ABOUT" em `neutral-800` no fundo).
- **Corner accent:** Imagens de card recebem um triângulo/clip de cor de acento no canto superior direito como detalhe de marca.
- **Noise/Grain:** Não presente como padrão dominante — mantém a estética limpa e digital.
- **Blur:** Usado com moderação em elementos flutuantes sobrepostos à foto (glassmorphism leve em stat cards ou floating CTAs).
### 6.3 Fotografia e Mídia
 
- Fotos de atletas são usadas em **preto e branco** nas grids de cursos/programas — isso cria unidade visual e faz os títulos em `lime-500` se destacarem ainda mais.
- Em heroes, as fotos são coloridas e integradas ao layout com `mix-blend-mode` ou posicionamento relativo ao texto.
- Proporção padrão de card de imagem: **4:3** ou **1:1** (quadrada com `radius-xl`).
---
 
## 7. Contrast and Accessibility
 
### 7.1 Nível de Contraste
 
**Alto contraste** como regra principal. O sistema foi construído para garantir legibilidade máxima em contextos digitais de alta energia.
 
| Combinação                          | Ratio aproximado | Status |
|-------------------------------------|-----------------|--------|
| `white` sobre `neutral-950`         | 19:1            | ✅ AAA  |
| `white` sobre `neutral-800`         | 12:1            | ✅ AAA  |
| `lime-500` sobre `neutral-950`      | 11:1            | ✅ AAA  |
| `orange-500` sobre `neutral-950`    | 5.5:1           | ✅ AA   |
| `neutral-950` sobre `lime-500`      | 11:1            | ✅ AAA  |
| `neutral-200` sobre `neutral-950`   | 8:1             | ✅ AAA  |
| `neutral-400` sobre `neutral-800`   | 3.5:1           | ⚠️ AA mínimo — usar apenas para captions |
 
### 7.2 Uso de Cor para Hierarquia
 
A hierarquia visual **não depende apenas de tamanho** — depende de cor e peso combinados:
 
1. **Nível 1 — Máxima atenção:** Heading em `white` + palavra-chave em `lime-500` ou `orange-500`, peso 800+
2. **Nível 2 — Atenção média:** Subheading em `white`, peso 600–700
3. **Nível 3 — Suporte:** Body em `neutral-200`, peso 400
4. **Nível 4 — Metadata:** Caption em `neutral-400`, peso 400, tamanho reduzido
A cor de acento **nunca** é usada em blocos de texto corrido — apenas em títulos, labels, CTAs e ícones. Isso preserva o impacto semântico da cor.
 
### 7.3 Estados Interativos
 
- **Hover em botão primário:** `lime-600` (escurece 10%), `shadow-glow-lime`
- **Hover em card:** `border-color` passa de `neutral-700` para `lime-500` ou `orange-500`
- **Estado ativo/selecionado:** Card recebe fundo `neutral-750` + borda de acento
- **Focus ring:** `2px solid lime-500` com `outline-offset: 3px`
---
 
## 8. Component Patterns (Reference)
 
### Card de Feature
 
```
┌─────────────────────────┐
│  [Ícone em círculo]     │
│  Title em white 700     │
│  Body em neutral-200    │
│                         │
│  [See Plan — pill btn]  │
└─────────────────────────┘
bg: neutral-800 | radius: radius-lg
border: 1px solid neutral-700
```
 
### Card de Curso/Programa
 
```
┌──────────────────┐
│   [Imagem B&W]   │  ◥ corner accent
│                  │
├──────────────────┤
│ Título em lime   │
│ Subtítulo em     │
│ neutral-200      │
└──────────────────┘
radius: radius-xl
```
 
### Pricing Card (Featured)
 
```
┌────────────────────┐
│  Plan Name  H3     │
│  $XX /month H2     │
│  Descrição  body   │
│  ─────────         │
│  ✓ item 1          │
│  ✓ item 2          │
│  ✓ item 3          │
│                    │
│  [Get Started →]   │
└────────────────────┘
bg: gradiente orange ou neutral-750
```
 
### Stat Row
 
```
[48px bold]  [48px bold]  [48px bold]  [48px bold]
  12[+]          27K[+]       60[+]        117[+]
  white + acento no [+]
  Caption em neutral-200 abaixo
```
 
---
 
*Design System v1.0 — Fitness / Performance Category*
*Gerado para uso em Figma Make e ambientes de design digital*
