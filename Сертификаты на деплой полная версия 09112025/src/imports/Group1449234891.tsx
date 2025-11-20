function SecondaryButtonM() {
  return (
    <div className="absolute bg-[#ff9800] box-border content-stretch flex gap-3 items-center justify-center left-[114px] px-[26px] py-7 rounded-[100px] top-[398px]" data-name="secondary button M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="font-['Manrope:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#fffbf2] text-[0px] text-nowrap tracking-[-0.32px] uppercase">
        <p className="leading-[1.2] text-[16px] whitespace-pre">Как это работает?</p>
      </div>
    </div>
  );
}

function Highlight() {
  return (
    <div className="bg-[#faffa1] box-border content-stretch flex gap-2.5 items-center justify-center pb-2.5 pt-[7px] px-2.5 relative rounded-[8px] w-[331px]" data-name="highlight">
      <div className="flex flex-col font-['Random_Grotesque_Standard_Medium:StandardMedium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5a4627] text-[22px] text-nowrap tracking-[-0.44px]">
        <p className="leading-[0.9] whitespace-pre">{`500+ объектов  40 регионах России`}</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="absolute bg-[#007a55] h-[542px] left-0 overflow-clip rounded-[30px] top-0 w-[861px]" data-name="info">
      <SecondaryButtonM />
      <div className="absolute font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] leading-[0.84] left-[114px] not-italic text-[#fffbf2] text-[56px] top-[86px] tracking-[-1.12px] w-[580px]">
        <p className="mb-0">{`Подарите `}</p>
        <p className="mb-0">близким</p>
        <p className="mb-0">отдых на природе</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Random_Grotesque_Standard_Medium:StandardMedium',_sans-serif] h-11 leading-[0] left-[119px] not-italic text-[#fffbf2] text-[20px] top-64 tracking-[-0.4px] w-[406px]">
        <p className="leading-none">
          Получатель сертификата
          <br aria-hidden="true" />
          сам выберет отель и дату
        </p>
      </div>
      <div className="absolute flex h-[82.505px] items-center justify-center left-[402.58px] top-[384.91px] w-[332.9px]">
        <div className="flex-none rotate-[352deg]">
          <Highlight />
        </div>
      </div>
    </div>
  );
}

export default function Group1449234891() {
  return (
    <div className="relative size-full">
      <Info />
    </div>
  );
}