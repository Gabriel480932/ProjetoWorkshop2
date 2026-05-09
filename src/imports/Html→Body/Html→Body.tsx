import svgPaths from "./svg-56fqi6hd82";
import imgGymBackground from "./ed6e6f11609aec133e06e1e093a0d39d6a6e3fb7.png";
import imgCardio from "./069ded6b7409d13190124169da8ff432c037e074.png";
import imgForcaLivre from "./bc8e92c823c6cd83b85cb311f836c01954fa0f1a.png";
import imgMaquinas from "./21dd29f4d15d77783538dd4524f53bb6c2b69a71.png";
import imgLocalizacao from "./2092a1e9fb23ba8fe76742298cbc5ecc3d525460.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ff6b1a] text-[12px] tracking-[1.8px] uppercase w-full">
        <p className="leading-[16px]">QUEM SOMOS</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-1.5px] uppercase w-full">
        <p className="leading-[60px] mb-0">FORJADOS</p>
        <p className="leading-[60px] mb-0">PELA</p>
        <p className="leading-[60px] text-[#ff6b1a]">DISCIPLINA.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">A FORGEE nasceu de uma certeza simples: ambiente</p>
        <p className="leading-[29.25px]">mediano produz resultado mediano.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Cada metro quadrado foi pensado para que o espaço não</p>
        <p className="leading-[29.25px] mb-0">interfira — ele desaparece. O que fica é o treino, a</p>
        <p className="leading-[29.25px]">concentração e o progresso.</p>
      </div>
    </div>
  );
}

function Blockquote() {
  return (
    <div className="relative shrink-0 w-full" data-name="Blockquote">
      <div aria-hidden="true" className="absolute border-[#ff6b1a] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[26px] py-[8px] relative size-full">
        <div className="flex flex-col font-['Oswald:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-[369.2px]">
          <p className="leading-[32px]">{`"IN SILENCE, THE TRANSFORMATION BEGINS."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Aqui não tem música forçada, espelho em excesso ou coach</p>
        <p className="leading-[29.25px] mb-0">em cima. Tem equipamento que não decepciona no seu</p>
        <p className="leading-[29.25px] mb-0">melhor dia, profissionais que aparecem quando você</p>
        <p className="leading-[29.25px]">precisa e silêncio o suficiente para se ouvir.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
      <Blockquote />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container2 />
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p35496480} id="Vector" stroke="var(--stroke-0, #FF6B1A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
          <p className="leading-[32px]">INTENSIDADE</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">O ambiente foi calibrado para elevar. Iluminação,</p>
          <p className="leading-[29.25px]">acústica, temperatura — tudo serve ao treino.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#111] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[33px] relative size-full">
        <Background1 />
        <Heading2 />
        <Container8 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p1f3a6200} id="Vector" stroke="var(--stroke-0, #FF6B1A)" strokeWidth="1.5" />
            <path d={svgPaths.p17b2e700} id="Vector_2" stroke="var(--stroke-0, #FF6B1A)" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.pfac7e00} id="Vector_3" stroke="var(--stroke-0, #FF6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
          <p className="leading-[32px]">PRECISÃO</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Protocolo individualizado desde o dia um. Nenhuma</p>
          <p className="leading-[29.25px]">planilha genérica sai daqui.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#111] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[33px] relative size-full">
        <Background2 />
        <Heading3 />
        <Container9 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p3b9baf00} id="Vector" stroke="var(--stroke-0, #FF6B1A)" strokeWidth="1.5" />
            <path d={svgPaths.p8d47b80} id="Vector_2" stroke="var(--stroke-0, #FF6B1A)" strokeWidth="1.5" />
            <path d={svgPaths.p123ce3a0} id="Vector_3" stroke="var(--stroke-0, #FF6B1A)" strokeWidth="1.5" />
            <path d={svgPaths.p29c8ce00} id="Vector_4" stroke="var(--stroke-0, #FF6B1A)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
          <p className="leading-[32px]">CONTROLE</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Você define o objetivo. Nós fornecemos o caminho,</p>
          <p className="leading-[29.25px]">o espaço e o suporte.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#111] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[33px] relative size-full">
        <Background3 />
        <Heading4 />
        <Container10 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container() {
  return (
    <div className="gap-x-[96px] gap-y-[96px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_769.50px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container7 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[160px] py-[128px] right-0 top-[1123.59px]" data-name="Section">
      <Container />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[60px] justify-center leading-[0] relative shrink-0 text-[#ff6b1a] text-[60px] text-center tracking-[-1.5px] uppercase w-[119.48px]">
        <p>
          <span className="leading-[60px]">+</span>
          <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[60px] text-white">1.2K</span>
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[0.4px] uppercase w-[130.31px]">
        <p className="leading-[24px]">ALUNOS ATIVOS</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] uppercase w-[117.12px]">
        <p>
          <span className="leading-[60px]">94</span>
          <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[60px] text-[#ff6b1a]">%</span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[0.4px] uppercase w-[171.58px]">
        <p className="leading-[24px]">RETENÇÃO (6 MESES)</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] uppercase w-[56.95px]">
        <p>
          <span className="leading-[60px]">8</span>
          <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[60px] text-[#ff6b1a]">Y</span>
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[0.4px] uppercase w-[121.13px]">
        <p className="leading-[24px]">EM OPERAÇÃO</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] uppercase w-[95.05px]">
        <p className="leading-[60px]">1.8K</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] text-center tracking-[0.4px] uppercase w-[165.59px]">
        <p className="leading-[24px]">ÁREA DEDICADA (M²)</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_92px] relative size-full">
        <Container12 />
        <Container15 />
        <Container18 />
        <Container21 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-0 px-[160px] py-[81px] right-0 top-[2149.09px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <IconifyIcon />
      <IconifyIcon1 />
      <IconifyIcon2 />
      <IconifyIcon3 />
      <IconifyIcon4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[29.25px] mb-0">{`"Treinei em academias em São`}</p>
        <p className="leading-[29.25px] mb-0">Paulo por anos. A FORGEE é a</p>
        <p className="leading-[29.25px] mb-0">única que me fez não sentir falta</p>
        <p className="leading-[29.25px]">{`de nenhuma delas."`}</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Rafael M.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Engenheiro · Aluno há 3 anos</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative size-full">
        <Container25 />
        <Container28 />
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <IconifyIcon5 />
      <IconifyIcon6 />
      <IconifyIcon7 />
      <IconifyIcon8 />
      <IconifyIcon9 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[29.25px] mb-0">{`"Entrei querendo perder peso.`}</p>
        <p className="leading-[29.25px] mb-0">Fiquei pela comunidade e pela</p>
        <p className="leading-[29.25px] mb-0">sensação de que alguém</p>
        <p className="leading-[29.25px]">{`realmente acompanha."`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Juliana T.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Professora · Aluna há 2 anos</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#1e1e1e] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative size-full">
        <Container31 />
        <Container34 />
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg14 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg15 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg16 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p97bf900} fill="var(--fill-0, #C8F135)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="iconify-icon">
      <Svg17 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <IconifyIcon10 />
      <IconifyIcon11 />
      <IconifyIcon12 />
      <IconifyIcon13 />
      <IconifyIcon14 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[29.25px] mb-0">{`"A estrutura impressiona. Mas o`}</p>
        <p className="leading-[29.25px] mb-0">que me mantém são os</p>
        <p className="leading-[29.25px] mb-0">profissionais. Nunca fui tão bem</p>
        <p className="leading-[29.25px]">{`orientado."`}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Lucas O.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Empresário · Aluno há 4 anos</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#1e1e1e] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative size-full">
        <Container37 />
        <Container40 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_303px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[160px] py-[128px] right-0 top-[2403.09px]" data-name="Section">
      <Container24 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[12px] tracking-[1.8px] uppercase w-full">
        <p className="leading-[16px]">QUEM TE ACOMPANHA</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.2px] uppercase w-full">
        <p className="leading-[48px] mb-0">COACHES QUE</p>
        <p className="leading-[48px] text-[#c8f135]">TREINAM.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[56px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-[645.11px]">
        <p className="leading-[28px] mb-0">Todos graduados em Educação Física. Todos registrados no CREF SP. Todos</p>
        <p className="leading-[28px]">treinando.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Heading5 />
      <Container46 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[20px] text-center uppercase w-[20.17px]">
          <p className="leading-[28px]">RF</p>
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[109.94px]">
        <p className="leading-[24px]">Rodrigo Farias</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[14px] w-[82.91px]">
        <p className="leading-[20px]">Head Coach</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] w-[114.09px]">
        <p className="leading-[16px]">CREF 045821-G/SP</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[114.09px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#111] col-1 h-[114px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[25px] relative size-full">
          <Background4 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[20px] text-center uppercase w-[19.42px]">
          <p className="leading-[28px]">AL</p>
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[71.45px]">
        <p className="leading-[24px]">Ana Luísa</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[14px] w-[86.86px]">
        <p className="leading-[20px]">Conditioning</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] w-[116.08px]">
        <p className="leading-[16px]">CREF 078342-G/SP</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-[116.08px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading7 />
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#111] col-2 h-[114px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[25px] relative size-full">
          <Background5 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[20px] text-center uppercase w-[19.83px]">
          <p className="leading-[28px]">BT</p>
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[62.06px]">
        <p className="leading-[24px]">Bruno T.</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[14px] w-[110.34px]">
        <p className="leading-[20px]">{`Mobility & Rehab`}</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] w-[114.94px]">
        <p className="leading-[16px]">CREF 091205-G/SP</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-[114.94px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading8 />
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#111] col-3 h-[114px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[25px] relative size-full">
          <Background6 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[20px] text-center uppercase w-[22.53px]">
          <p className="leading-[28px]">CD</p>
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[73.53px]">
        <p className="leading-[24px]">Camila D.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[14px] w-[103.63px]">
        <p className="leading-[20px]">Personal Trainer</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] w-[112.95px]">
        <p className="leading-[16px]">CREF 063417-G/SP</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-[112.95px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading9 />
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#111] col-4 h-[114px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[25px] relative size-full">
          <Background7 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_114px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder6 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
      <BackgroundBorder9 />
    </div>
  );
}

function Container43() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container44 />
        <Container47 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[80px] py-[128px] right-0 top-[6458.58px]" data-name="Section">
      <Container43 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff6b1a] text-[12px] text-center tracking-[1.8px] uppercase w-[65.97px]">
        <p className="leading-[16px]">DÚVIDAS</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[96px] justify-center leading-[0] relative shrink-0 text-[48px] text-center text-white tracking-[-1.2px] uppercase w-[214.82px]">
        <p className="leading-[48px] mb-0">PERGUNTAS</p>
        <p className="leading-[48px] text-[#ff6b1a]">DIRETAS.</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Heading10 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p22504d80} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg18 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[231.38px]">
          <p className="leading-[28px]">Preciso ter experiência?</p>
        </div>
        <IconifyIcon15 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[37px] right-0 top-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <Heading11 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p22504d80} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg19 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[214.38px]">
          <p className="leading-[28px]">Posso treinar sozinho?</p>
        </div>
        <IconifyIcon16 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[37px] right-0 top-[89px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <Heading12 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p22504d80} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg20 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[318.81px]">
          <p className="leading-[28px]">Como funciona o cancelamento?</p>
        </div>
        <IconifyIcon17 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[37px] right-0 top-[162px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <Heading13 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p22504d80} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg21 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[288.88px]">
          <p className="leading-[28px]">Posso visitar antes de assinar?</p>
        </div>
        <IconifyIcon18 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[37px] right-0 top-[235px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <Heading14 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

function Container60() {
  return (
    <div className="max-w-[800px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] relative size-full">
        <Container61 />
        <Container63 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-0 px-[320px] py-[97px] right-0 top-[7100.58px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container60 />
    </div>
  );
}

function GymBackground() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Gym Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[104.17%] left-0 max-w-none top-[-2.08%] w-full" src={imgGymBackground} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <GymBackground />
      <div className="absolute bg-gradient-to-r from-[#0a0a0a] inset-0 to-[rgba(10,10,10,0)] via-1/2 via-[rgba(10,10,10,0.8)]" data-name="Gradient" />
      <div className="absolute bg-gradient-to-t from-[#0a0a0a] inset-0 to-[rgba(10,10,10,0)]" data-name="Gradient" />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[12px] tracking-[1.8px] uppercase w-full">
        <p className="leading-[16px]">BEYOND LIMITS KNOWN™ · INDAIATUBA, SP · EST. 2018</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[72px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[72px] mb-0">SEM MÁGICA</p>
        <p className="leading-[72px] mb-0">SEM ATALHOS</p>
        <p className="leading-[72px] text-[#c8f135]">SEM DESCULPAS</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] w-full">
        <p className="leading-[36px]">Treinos progressivos e acompanhamento real!</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[84px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[20px] w-[569.05px]">
        <p className="leading-[28px] mb-0">Um espaço desenhado para quem treina com intenção. Sem</p>
        <p className="leading-[28px] mb-0">distrações. Sem promessas vazias. Só você, o equipamento</p>
        <p className="leading-[28px]">e o trabalho.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#c8f135] drop-shadow-[0px_0px_12px_rgba(200,241,53,0.2)] relative rounded-[9999px] self-stretch shrink-0" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[16.5px] px-[32px] relative size-full">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[18px] text-center w-[136.59px]">
            <p className="leading-[28px]">Começar Agora</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[9999px] self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[16.5px] px-[33px] relative size-full">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[168.88px]">
            <p className="leading-[28px]">Conhecer o Espaço</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[16px] h-[86px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <Container67 />
      <Heading />
      <Heading15 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] px-[80px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[921.5900268554688px] overflow-clip pb-[169.79px] pt-[233.8px] right-0 top-0" data-name="Section">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[12px] tracking-[1.8px] uppercase w-full">
        <p className="leading-[16px]">ESTRUTURA</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-1.5px] uppercase w-full">
        <p className="leading-[60px] mb-0">EQUIPAMENTO</p>
        <p className="leading-[60px] mb-0">QUE NÃO TE</p>
        <p className="leading-[60px] text-[#c8f135]">LIMITA.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[20px] w-full">
        <p className="leading-[32.5px] mb-0">Cada peça selecionada com um critério: aguentar seu melhor dia todos</p>
        <p className="leading-[32.5px]">os dias.</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[23.3px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <Container72 />
      <Heading16 />
      <Container73 />
    </div>
  );
}

function Cardio() {
  return (
    <div className="h-[266.48px] relative shrink-0 w-full" data-name="Cardio">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[200.01%] left-0 max-w-none top-[-50.01%] w-full" src={imgCardio} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="mb-[-47.99px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Cardio />
        <div className="absolute bg-gradient-to-t from-[#1e1e1e] inset-0 to-[rgba(30,30,30,0)] via-1/2 via-[rgba(30,30,30,0.5)]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[16px]">01</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
        <p className="leading-[32px]">{`CARDIO & CONDITIONING`}</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p12d908c0} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg22 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon19 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[235.52px]">
        <p className="leading-[24px]">Assault Bike Concept2 (8 Unid.)</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p12d908c0} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg23 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon20 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[254.16px]">
        <p className="leading-[24px]">Remo Concept2 Model D (6 Unid.)</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p12d908c0} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg24 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon21 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[193.27px]">
        <p className="leading-[24px]">SkiErg Concept2 (4 Unid.)</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start pt-[8px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container76() {
  return (
    <div className="mb-[-47.99px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[48px] pt-[24px] px-[24px] relative size-full">
        <Container77 />
        <Heading17 />
        <List />
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[66.98px] pt-px px-px relative rounded-[inherit] size-full">
        <Container75 />
        <Container76 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function ForcaLivre() {
  return (
    <div className="h-[266.48px] relative shrink-0 w-full" data-name="Força Livre">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-6.28%] max-w-none top-0 w-[112.56%]" src={imgForcaLivre} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="mb-[-47.99px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <ForcaLivre />
        <div className="absolute bg-gradient-to-t from-[#1e1e1e] inset-0 to-[rgba(30,30,30,0)] via-1/2 via-[rgba(30,30,30,0.5)]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[16px]">02</p>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
        <p className="leading-[32px]">FORÇA LIVRE</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-full">
        <p className="leading-[26px] mb-0">Plataformas de LPO padrão olímpico,</p>
        <p className="leading-[26px] mb-0">racks reforçados, anilhas calibradas e</p>
        <p className="leading-[26px] mb-0">halteres até 60kg. Espaço otimizado</p>
        <p className="leading-[26px] mb-0">para levantamentos pesados sem</p>
        <p className="leading-[26px]">restrição.</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="mb-[-47.99px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Container80 />
        <Heading18 />
        <Container81 />
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#1e1e1e] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[48.99px] pt-px px-px relative rounded-[inherit] size-full">
        <Container78 />
        <Container79 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Maquinas() {
  return (
    <div className="h-[266.5px] relative shrink-0 w-full" data-name="Máquinas">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-6.28%] max-w-none top-0 w-[112.57%]" src={imgMaquinas} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="mb-[-48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <Maquinas />
        <div className="absolute bg-gradient-to-t from-[#1e1e1e] inset-[0_-0.01px_0_0] to-[rgba(30,30,30,0)] via-1/2 via-[rgba(30,30,30,0.5)]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[16px]">03</p>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
        <p className="leading-[32px]">MÁQUINAS ARTICULADAS</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-full">
        <p className="leading-[26px] mb-0">Seleção premium de máquinas</p>
        <p className="leading-[26px] mb-0">convergentes e divergentes. Foco</p>
        <p className="leading-[26px] mb-0">absoluto em biomecânica isolada para</p>
        <p className="leading-[26px]">hipertrofia com segurança máxima.</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="mb-[-48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Container84 />
        <Heading19 />
        <Container85 />
      </div>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#1e1e1e] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[74.98px] pt-px px-px relative rounded-[inherit] size-full">
        <Container82 />
        <Container83 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_470.48px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder10 />
      <BackgroundBorder11 />
      <BackgroundBorder12 />
    </div>
  );
}

function Container70() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container71 />
        <Container74 />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute bg-[#111] left-0 right-0 top-[2962.09px]" data-name="Section">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[128px] pt-[129px] px-[80px] relative rounded-[inherit] size-full">
        <Container70 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#00e5ff] text-[12px] text-center tracking-[1.8px] uppercase w-[154.97px]">
        <p className="leading-[16px]">O QUE OFERECEMOS</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[180px] justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] uppercase w-[363.23px]">
        <p className="leading-[60px] mb-0">UM PROTOCOLO</p>
        <p className="leading-[60px] mb-0">PARA CADA</p>
        <p className="leading-[60px] text-[#00e5ff]">OBJETIVO.</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Container88 />
      <Heading20 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#2d2d2d] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[12px] w-[13.3px]">
        <p className="leading-[16px]">01</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[36px] justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] uppercase w-[210.39px]">
          <p>
            <span className="leading-[36px]">{`FORGEE `}</span>
            <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[36px] text-[#00e5ff]">STRENGTH</span>
          </p>
        </div>
        <Background8 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Musculação por periodização. Para quem quer construir</p>
          <p className="leading-[29.25px] mb-0">massa e entender o próprio corpo. Disponível como</p>
          <p className="leading-[29.25px]">treino livre com planilha ou acompanhado com coach.</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_12.5%_12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0833 17.0833">
          <g id="Group">
            <path d={svgPaths.p3da36380} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="1.25" />
            <path d={svgPaths.p3fec4300} id="Vector_2" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeWidth="1.25" />
            <path d={svgPaths.p2ba7fd80} id="Vector_3" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="1.25" />
            <path d={svgPaths.p34118a80} id="Vector_4" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function IconifyIcon22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg25 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[278.94px]">
        <p className="leading-[24px]">Iniciantes a avançados em hipertrofia</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <IconifyIcon22 />
        <Container93 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[10.42%_8.33%_8.33%_8.33%]" data-name="Group">
      <div className="absolute inset-[-3.85%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 17.5">
          <g id="Group">
            <path d={svgPaths.p2a15180} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="1.25" />
            <path d={svgPaths.p2916e600} id="Vector_2" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeWidth="1.25" />
            <path d={svgPaths.p1f5c7f80} fill="var(--fill-0, #B0B0B0)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function IconifyIcon23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg26 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[223px]">
        <p className="leading-[24px]">Frequência: 3–5× por semana</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <IconifyIcon23 />
        <Container95 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[33px] relative size-full">
        <Container92 />
        <Container94 />
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[41px] pt-[33px] px-[33px] relative size-full">
        <Container90 />
        <Container91 />
        <HorizontalBorder4 />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#2d2d2d] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[12px] w-[15.94px]">
        <p className="leading-[16px]">03</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[36px] justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] uppercase w-[200.61px]">
          <p>
            <span className="leading-[36px]">{`FORGEE `}</span>
            <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[36px] text-[#00e5ff]">MOBILITY</span>
          </p>
        </div>
        <Background9 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Protocolo de mobilidade, postura e cadeia posterior.</p>
          <p className="leading-[29.25px] mb-0">Não é yoga. É trabalho de corpo para quem treina</p>
          <p className="leading-[29.25px]">pesado e não quer se machucar.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[41px] pt-[33px] px-[33px] relative size-full">
        <Container96 />
        <Container97 />
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#2d2d2d] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[12px] w-[16.36px]">
        <p className="leading-[16px]">04</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[36px] justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] uppercase w-[234.59px]">
          <p>
            <span className="leading-[36px]">{`PERSONAL `}</span>
            <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[36px] text-[#00e5ff]">TRAINING</span>
          </p>
        </div>
        <Background10 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Sessões 1:1 com avaliação completa, protocolo</p>
          <p className="leading-[29.25px] mb-0">personalizado e revisão a cada 4 semanas. Individual ou</p>
          <p className="leading-[29.25px]">em dupla.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="bg-[#111] col-2 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[41px] pt-[33px] px-[33px] relative size-full">
        <Container98 />
        <Container99 />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#2d2d2d] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[12px] w-[15.78px]">
        <p className="leading-[16px]">02</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[36px] justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] uppercase w-[258.63px]">
          <p>
            <span className="leading-[36px]">{`FORGEE `}</span>
            <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[36px] text-[#00e5ff]">CONDITIONING</span>
          </p>
        </div>
        <Background11 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Sessões de 45 min com circuito de alta intensidade —</p>
          <p className="leading-[29.25px] mb-0">remo, assault bike, força funcional e potência. Início e</p>
          <p className="leading-[29.25px]">fim marcados. Sem improvisar.</p>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 17.9167">
          <g id="Group">
            <path d={svgPaths.p28724800} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeWidth="1.25" />
            <path d={svgPaths.p20075780} id="Vector_2" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function IconifyIcon24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg27 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[277.91px]">
        <p className="leading-[24px]">Condicionamento, perda de gordura</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <IconifyIcon24 />
        <Container103 />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 17.9167">
          <g id="Group">
            <path d={svgPaths.pc9ca700} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="1.25" />
            <path d={svgPaths.p972ca80} id="Vector_2" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function IconifyIcon25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg28 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[270.33px]">
        <p className="leading-[24px]">Turmas: 06H · 07H · 12H · 18H · 19H30</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <IconifyIcon25 />
        <Container105 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[33px] relative size-full">
        <Container102 />
        <Container104 />
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-[#00e5ff] right-px rounded-bl-[8px] top-px" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12px] w-[64.17px]">
          <p className="leading-[16px]">DESTAQUE</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="bg-[#111] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[33px] pt-[41px] px-[33px] relative size-full">
          <Container100 />
          <Container101 />
          <HorizontalBorder5 />
          <Background12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00e5ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container89() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__338.75px_221.75px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder13 />
      <BackgroundBorder14 />
      <BackgroundBorder15 />
      <BackgroundBorder16 />
    </div>
  );
}

function Container86() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] px-[80px] relative size-full">
          <Container87 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[80px] py-[128px] right-0 top-[4062.58px]" data-name="Section">
      <Container86 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff6b1a] text-[12px] text-center tracking-[1.8px] uppercase w-[109.67px]">
        <p className="leading-[16px]">INVESTIMENTO</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-center pt-px relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[180px] justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] uppercase w-[391.55px]">
        <p className="leading-[60px] mb-0">SEM MATRÍCULA.</p>
        <p className="leading-[60px] mb-0">SEM FIDELIDADE.</p>
        <p className="leading-[60px] text-[#ff6b1a]">SEM ENROLAÇÃO.</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[33px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[20px] text-center w-[655.97px]">
        <p className="leading-[32.5px]">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Container108 />
      <Heading21 />
      <Container109 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
        <p className="leading-[32px]">LIVRE</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading22 />
      </div>
    </div>
  );
}

function ParagraphHorizontalBorder() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[48px] justify-center leading-[0] left-0 text-[48px] text-white top-[24px] tracking-[-1.2px] uppercase w-[113.91px]">
        <p className="leading-[48px]">R$149</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-[121.91px] text-[#b0b0b0] text-[16px] top-[39px] w-[42.11px]">
        <p className="leading-[24px]">/ mês</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <ParagraphHorizontalBorder />
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg29 />
    </div>
  );
}

function IconifyIconMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon26 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[200.86px]">
        <p className="leading-[24px]">Acesso ilimitado 05H–23H</p>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg30 />
    </div>
  );
}

function IconifyIconMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon27 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[200.59px]">
        <p className="leading-[24px]">Avaliação física de entrada</p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg31 />
    </div>
  );
}

function IconifyIconMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon28 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[173.94px]">
        <p className="leading-[24px]">Planilha de treino inicial</p>
      </div>
    </div>
  );
}

function Svg32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg32 />
    </div>
  );
}

function IconifyIconMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon29 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin3 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[100.66px]">
        <p className="leading-[24px]">App FORGEE</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[72px] relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <List1 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[17px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[134.22px]">
          <p className="leading-[24px]">Quero Esse Plano</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative rounded-[24px] row-1 self-center shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative size-full">
        <Heading3Margin />
        <Margin />
        <ListMargin />
        <Link2 />
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
        <p className="leading-[32px]">ELITE</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading23 />
      </div>
    </div>
  );
}

function ParagraphHorizontalBorder1() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[48px] justify-center leading-[0] left-0 text-[48px] text-white top-[24px] tracking-[-1.2px] uppercase w-[119.81px]">
        <p className="leading-[48px]">R$389</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-[127.81px] text-[#b0b0b0] text-[16px] top-[39px] w-[42.11px]">
        <p className="leading-[24px]">/ mês</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <ParagraphHorizontalBorder1 />
      </div>
    </div>
  );
}

function Svg33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg33 />
    </div>
  );
}

function IconifyIconMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon30 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin4 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[109.19px]">
        <p className="leading-[24px]">Tudo do Plus +</p>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg34 />
    </div>
  );
}

function IconifyIconMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon31 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin5 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[206.7px]">
        <p className="leading-[24px]">4 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg35() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg35 />
    </div>
  );
}

function IconifyIconMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon32 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[50.47px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[203.53px]">
        <p className="leading-[24px] mb-0">Acesso ilimitado a todas as</p>
        <p className="leading-[24px]">classes</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin6 />
      <Container111 />
    </div>
  );
}

function Svg36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg36 />
    </div>
  );
}

function IconifyIconMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon33 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin7 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[172.56px]">
        <p className="leading-[24px]">Bioimpedância mensal</p>
      </div>
    </div>
  );
}

function Svg37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg37 />
    </div>
  );
}

function IconifyIconMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon34 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin8 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[245.41px]">
        <p className="leading-[24px]">WhatsApp com coach dedicado</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[8px] relative shrink-0 w-full" data-name="List">
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <List2 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[17px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[134.22px]">
          <p className="leading-[24px]">Quero Esse Plano</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="bg-[#1e1e1e] col-3 justify-self-stretch relative rounded-[24px] row-1 self-center shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative size-full">
        <Heading3Margin1 />
        <Margin1 />
        <ListMargin1 />
        <Link3 />
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-full">
        <p className="leading-[32px]">PLUS</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
        <Heading24 />
      </div>
    </div>
  );
}

function ParagraphHorizontalBorder2() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[48px] justify-center leading-[0] left-0 text-[48px] text-white top-[24px] tracking-[-1.2px] uppercase w-[119.34px]">
        <p className="leading-[48px]">R$229</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-[127.34px] text-[#b0b0b0] text-[16px] top-[39px] w-[42.11px]">
        <p className="leading-[24px]">/ mês</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <ParagraphHorizontalBorder2 />
      </div>
    </div>
  );
}

function Svg38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #FF6B1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg38 />
    </div>
  );
}

function IconifyIconMargin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon35 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin9 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[113.92px]">
        <p className="leading-[24px]">Tudo do Livre +</p>
      </div>
    </div>
  );
}

function Svg39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg39 />
    </div>
  );
}

function IconifyIconMargin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon36 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin10 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[206.22px]">
        <p className="leading-[24px]">2 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg40 />
    </div>
  );
}

function IconifyIconMargin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon37 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin11 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[208.63px]">
        <p className="leading-[24px]">1 aula Conditioning/semana</p>
      </div>
    </div>
  );
}

function Svg41() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg41 />
    </div>
  );
}

function IconifyIconMargin12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon38 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[42.77px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[209.23px]">
        <p className="leading-[24px] mb-0">Revisão de planilha a cada 4</p>
        <p className="leading-[24px]">semanas</p>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin12 />
      <Container112 />
    </div>
  );
}

function Svg42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p12b86e00} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg42 />
    </div>
  );
}

function IconifyIconMargin13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIcon39 />
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIconMargin13 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[141.7px]">
        <p className="leading-[24px]">Acesso ao Mobility</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
    </div>
  );
}

function ListMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <List3 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#ff6b1a] drop-shadow-[0px_0px_12px_rgba(255,107,26,0.3)] relative rounded-[9999px] shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[16px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] text-center w-[134.22px]">
          <p className="leading-[24px]">Quero Esse Plano</p>
        </div>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[#ff6b1a] left-[29.3%] right-[29.3%] rounded-[9999px] top-[-14px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[6px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[0.6px] uppercase w-[113.72px]">
          <p className="leading-[16px]">MAIS ESCOLHIDO</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-gradient-to-b col-2 content-stretch drop-shadow-[0px_8px_16px_rgba(0,0,0,0.5)] flex flex-col from-[#1e1e1e] items-start p-[34px] relative rounded-[24px] row-1 self-center shrink-0 to-[#111] w-[352px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-[#ff6b1a] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Heading3Margin2 />
      <Margin2 />
      <ListMargin2 />
      <Link4 />
      <Background13 />
    </div>
  );
}

function Container110() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_536px] max-w-[1152px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder17 />
      <BackgroundBorder18 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[14px] text-center w-[762.77px]">
        <p className="leading-[20px]">Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[184.05px]">
          <p className="leading-[20px]">Opção avulsa: DIÁRIA R$ 39</p>
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[14px] text-center w-[57.91px]">
          <p className="leading-[20px]">Agendar</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder19() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex gap-[16px] items-center px-[25px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container115 />
      <div className="bg-[#2d2d2d] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Link5 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[896px] relative shrink-0 w-[896px]" data-name="Container">
      <Container114 />
      <BackgroundBorder19 />
    </div>
  );
}

function Container106() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-center max-w-[inherit] px-[80px] relative size-full">
          <Container107 />
          <Container110 />
          <Container113 />
        </div>
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-0 pb-[128px] pt-[129px] px-[80px] right-0 top-[5195.08px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-solid border-t inset-0 pointer-events-none" />
      <Container106 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[12px] tracking-[1.8px] uppercase w-full">
        <p className="leading-[16px]">ONDE ESTAMOS</p>
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-1.5px] uppercase w-full">
        <p className="leading-[60px] mb-0">NO CORAÇÃO</p>
        <p>
          <span className="leading-[60px]">{`DE `}</span>
          <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[60px] text-[#c8f135]">INDAIATUBA.</span>
        </p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%_16.67%_8.34%_16.67%]" data-name="Group">
      <div className="absolute inset-[-3.75%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.4996">
          <g id="Group">
            <path d={svgPaths.p3df73370} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeWidth="1.5" />
            <path d={svgPaths.p7268000} id="Vector_2" stroke="var(--stroke-0, #C8F135)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg43() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function IconifyIcon40() {
  return (
    <div className="relative self-stretch shrink-0" data-name="iconify-icon">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[80px] relative size-full">
          <Svg43 />
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white w-[209.56px]">
        <p className="leading-[28px]">Rua das Esmeraldas, 742</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-[290.02px]">
        <p className="leading-[24px] mb-0">Jardim Morada do Sol — Indaiatuba, SP</p>
        <p className="leading-[24px]">CEP 13.334-210</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-[293.69px]">
        <p className="leading-[20px]">200m do Carrefour · Próximo à saída SP-075</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[293.69px]" data-name="Container">
      <Container122 />
      <Container123 />
      <Container124 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex gap-[16px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <IconifyIcon40 />
      <Container121 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p1f5a2d80} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeWidth="1.5" />
            <path d={svgPaths.p3106ba00} id="Vector_2" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg44() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group7 />
    </div>
  );
}

function IconifyIcon41() {
  return (
    <div className="relative self-stretch shrink-0" data-name="iconify-icon">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[82px] relative size-full">
          <Svg44 />
        </div>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-[73.17px]">
          <p className="leading-[24px]">Seg a Sex</p>
        </div>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[125.73px]">
          <p className="leading-[24px]">05H00 – 23H00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="content-stretch flex h-[33px] items-start justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <Container127 />
      <Container128 />
    </div>
  );
}

function Container129() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-[60.16px]">
          <p className="leading-[24px]">Sábado</p>
        </div>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[126.47px]">
          <p className="leading-[24px]">07H00 – 20H00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="content-stretch flex h-[33px] items-start justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <Container129 />
      <Container130 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-[115.53px]">
        <p className="leading-[24px]">Dom / Feriados</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[122.92px]">
        <p className="leading-[24px]">08H00 – 14H00</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container132 />
      <Container133 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[384px] relative self-stretch shrink-0 w-[384px]" data-name="Container">
      <HorizontalBorder6 />
      <HorizontalBorder7 />
      <Container131 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex gap-[16px] h-[106px] items-start relative shrink-0 w-full" data-name="Container">
      <IconifyIcon41 />
      <Container126 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-3.75%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
          <g id="Group">
            <path d={svgPaths.p25fa9000} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeWidth="1.5" />
            <path d="M11.75 17.75H5.75" id="Vector_2" stroke="var(--stroke-0, #C8F135)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg45() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group8 />
    </div>
  );
}

function IconifyIcon42() {
  return (
    <div className="relative self-stretch shrink-0" data-name="iconify-icon">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[48px] relative size-full">
          <Svg45 />
        </div>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[126.27px]">
        <p className="leading-[24px]">(19) 98234-5678</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-[203.27px]">
        <p className="leading-[24px]">contato@forgee.academy</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-[142.61px]">
        <p className="leading-[24px]">@forgee.academy</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[203.27px]" data-name="Container">
      <Container136 />
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <IconifyIcon42 />
      <Container135 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Container125 />
      <Container134 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 17.9167">
          <g id="Group">
            <path d={svgPaths.p10e06840} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.25" />
            <path d={svgPaths.p31c76880} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg46() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#25d366] relative rounded-[9999px] self-stretch shrink-0" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pb-[17.5px] pt-[16.5px] px-[32px] relative size-full">
          <Svg46 />
          <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[144.36px]">
            <p className="leading-[24px]">Falar no WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[9999px] self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17.5px] pt-[16.5px] px-[33px] relative size-full">
          <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[107.53px]">
            <p className="leading-[24px]">Como Chegar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[16px] h-[74px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container117() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container118 />
      <Heading25 />
      <Container119 />
      <Container139 />
    </div>
  );
}

function Localizacao() {
  return (
    <div className="h-[658px] relative shrink-0 w-full" data-name="Localização">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-44.23%] max-w-none top-0 w-[188.47%]" src={imgLocalizacao} />
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.33%_16.67%_8.34%_16.67%]" data-name="Group">
      <div className="absolute inset-[-3.75%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.4996">
          <g id="Group">
            <path d={svgPaths.p3df73370} id="Vector" stroke="var(--stroke-0, #C8F135)" strokeWidth="1.5" />
            <path d={svgPaths.p7268000} id="Vector_2" stroke="var(--stroke-0, #C8F135)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg47() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group10 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#0a0a0a] content-stretch drop-shadow-[0px_0px_12px_rgba(200,241,53,0.3)] flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-2 border-[#c8f135] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Svg47 />
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <BackgroundBorderShadow1 />
      </div>
    </div>
  );
}

function BackgroundBorder20() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[24px] row-1 self-center shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[#1e1e1e] inset-0 rounded-[24px]" />
        <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[24px]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Localizacao />
        <Container140 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container116() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_660px] relative shrink-0 w-full" data-name="Container">
      <Container117 />
      <BackgroundBorder20 />
    </div>
  );
}

function Section9() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[160px] py-[128px] right-0 top-[7794.58px]" data-name="Section">
      <Container116 />
    </div>
  );
}

function Svg48() {
  return <div className="shrink-0 size-[40px]" data-name="SVG" />;
}

function Image() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Image">
      <Svg48 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[288px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[96px] text-center tracking-[-2.4px] uppercase w-[629.52px]">
        <p className="leading-[96px] mb-0">A DECISÃO</p>
        <p className="leading-[96px] mb-0">JÁ FOI TOMADA.</p>
        <p className="leading-[96px]">AGORA É A AÇÃO.</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] pb-[16px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[48px] justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[16px] text-center tracking-[11.2px] uppercase w-[671.16px]">
        <p className="leading-[24px] mb-0">AGENDE UMA VISITA · GRATUITA · SEM</p>
        <p className="leading-[24px]">COMPROMISSO · TRAGA TÊNIS.</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[#0a0a0a] content-stretch drop-shadow-[0px_8px_16px_rgba(0,0,0,0.3)] flex items-center justify-center px-[40px] py-[20px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-[222.11px]">
        <p className="leading-[28px]">Agendar Visita Gratuita</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] px-[80px] relative size-full">
          <Heading26 />
          <Container142 />
          <Link8 />
        </div>
      </div>
    </div>
  );
}

function Section10() {
  return (
    <div className="absolute bg-[#c8f135] content-stretch flex flex-col items-start left-0 overflow-clip px-[80px] py-[128px] right-0 top-[8710.58px]" data-name="Section">
      <Image />
      <Container141 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[12px] tracking-[1.2px] uppercase w-[65.08px]">
        <p className="leading-[16px]">HORÁRIO</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[40px] relative row-1 self-start shrink-0" data-name="Container">
      <Margin3 />
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] uppercase w-[131.05px]">
        <p className="leading-[40px]">05H–23H</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[12px] tracking-[1.2px] uppercase w-[32.56px]">
          <p className="leading-[16px]">DIAS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[40px] pl-[33px] pr-[32px] relative size-full">
        <Margin4 />
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] uppercase w-[87.38px]">
          <p className="leading-[40px]">7 DIAS</p>
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[12px] tracking-[1.2px] uppercase w-[35.98px]">
          <p className="leading-[16px]">ÁREA</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[40px] pl-[33px] pr-[32px] relative size-full">
        <Margin5 />
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] uppercase w-[115.25px]">
          <p className="leading-[40px]">1.800M²</p>
        </div>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[12px] tracking-[1.2px] uppercase w-[95.41px]">
          <p className="leading-[16px]">COMUNIDADE</p>
        </div>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[94.34px] relative size-full">
        <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[80px] justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[36px] tracking-[-0.9px] uppercase w-[108.66px]">
          <p className="mb-0">
            <span className="leading-[40px]">+</span>
            <span className="font-['Oswald:SemiBold',sans-serif] font-semibold leading-[40px] text-white">1.200</span>
          </p>
          <p className="leading-[40px] text-white">ALUNOS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[33px] pr-[32px] relative size-full">
        <Margin6 />
        <Container145 />
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_104px] relative size-full">
        <Container144 />
        <VerticalBorder />
        <VerticalBorder1 />
        <VerticalBorder2 />
      </div>
    </div>
  );
}

function Section11() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[160px] py-[49px] right-0 top-[921.59px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container143 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[9450.58px] relative shrink-0 w-full" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] uppercase w-full">
        <p className="leading-[40px]">FORGEE</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#c8f135] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-[20px]">BEYOND LIMITS KNOWN™</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="col-[1/span_6] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[124px] relative row-1 self-start shrink-0" data-name="Container">
      <Link9 />
      <Container149 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Academia</p>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[24px]">Espaço</p>
      </div>
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[24px]">Programas</p>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[24px]">Equipe</p>
      </div>
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[24px]">Planos</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item17 />
      <Item18 />
      <Item19 />
      <Item20 />
    </div>
  );
}

function Container150() {
  return (
    <div className="col-[7/span_3] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading27 />
      <List4 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">{`Legal & Redes`}</p>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[24px]">Política de Privacidade</p>
      </div>
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] w-full">
        <p className="leading-[24px]">Termos de Uso</p>
      </div>
    </div>
  );
}

function Svg49() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_750)" id="SVG">
          <path d={svgPaths.pe2f54c0} fill="var(--fill-0, #B0B0B0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_750">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon43() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg49 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <IconifyIcon43 />
    </div>
  );
}

function Svg50() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_772)" id="SVG">
          <path d={svgPaths.p393d2780} fill="var(--fill-0, #B0B0B0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_772">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon44() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg50 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <IconifyIcon44 />
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-start pt-[16px] relative shrink-0 w-full" data-name="Item">
      <Link10 />
      <Link11 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item21 />
      <Item22 />
      <Item23 />
    </div>
  );
}

function Container151() {
  return (
    <div className="col-[10/span_3] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading28 />
      <List5 />
    </div>
  );
}

function Container147() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_192px] relative shrink-0 w-full" data-name="Container">
      <Container148 />
      <Container150 />
      <Container151 />
    </div>
  );
}

function Container152() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.3px] w-[549.42px]">
          <p className="leading-[16px]">FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP · DESIGN SYSTEM © 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] w-[120.11px]">
          <p className="leading-[16px]">Built for Performance</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-solid border-t inset-0 pointer-events-none" />
      <Container152 />
      <Container153 />
    </div>
  );
}

function Container146() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container147 />
        <HorizontalBorder8 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#050505] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[81px] px-[80px] relative size-full">
        <Container146 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 min-h-[1024px] right-0 top-0" data-name="Background">
      <Main />
      <Footer />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px] uppercase w-[69.02px]">
        <p className="leading-[32px]">FORGEE</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[57.84px]">
        <p className="leading-[24px]">Espaço</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[83.16px]">
        <p className="leading-[24px]">Programas</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[53.81px]">
        <p className="leading-[24px]">Equipe</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#d4d4d4] text-[16px] w-[50.91px]">
        <p className="leading-[24px]">Planos</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] h-[24px] items-start relative shrink-0" data-name="Nav">
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[97.73px]">
        <p className="leading-[24px]">Sou Membro</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="bg-[#c8f135] content-stretch drop-shadow-[0px_0px_12px_rgba(200,241,53,0.1)] flex flex-col items-start px-[24px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] w-[111.58px]">
        <p className="leading-[24px]">Agendar Visita</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex gap-[16.01px] items-center relative shrink-0" data-name="Container">
      <Link17 />
      <Link18 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[80px] pr-[80.02px] relative size-full">
          <Link12 />
          <Nav />
          <Container155 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.8)] content-stretch flex flex-col items-start left-0 pb-px px-[80px] top-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-b border-solid inset-0 pointer-events-none" />
      <Container154 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Background />
      <Header />
    </div>
  );
}