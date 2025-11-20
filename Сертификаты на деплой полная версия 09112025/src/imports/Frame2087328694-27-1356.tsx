import imgChatGptImage1020251716181 from "figma:asset/ba979cfc42eec558be3b1091a49cab7719d71d49.png";
import { imgEllipse } from "./svg-rp4jl";

function ChatGptImage1020251716181() {
  return (
    <div className="relative size-full" data-name="ChatGPT Image 10 сент. 2025 г., 17_16_18 1">
      <div className="absolute bg-no-repeat bg-size-[100%_125.9%] bg-top-left inset-0" data-name="ChatGPT Image 10 сент. 2025 г., 17_16_18 1" style={{ backgroundImage: `url('${imgChatGptImage1020251716181}')` }} />
      <div className="absolute font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] inset-[7.45%_68.11%_73.76%_3.75%] leading-[0.84] not-italic text-[0px] text-black tracking-[-0.24px]">
        <p className="mb-0 text-[12px]">Вы дарите сертификат</p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p className="text-[#929291] text-[10px]">В красивой упаковке с доставкой от 2-х часов или письмом на эл. почту</p>
      </div>
      <div className="absolute font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] inset-[6.03%_34.15%_75.18%_37.71%] leading-[0] not-italic text-[0px] text-black tracking-[-0.24px]">
        <p className="leading-[0.84] mb-0 text-[12px]">Получатель сам выберет глэмпинг и даты</p>
        <p className="leading-[0.84] mb-0 text-[12px]">&nbsp;</p>
        <p className="leading-[0.84] text-[#929291] text-[10px]">
          <span className="font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] not-italic">Сотни проверенных объектов с фото и самым подробным описанием</span> и фильтрами для поиска
        </p>
      </div>
      <div className="absolute bottom-[68.05%] left-0 right-[96.22%] top-[24.81%]" data-name="Ellipse">
        <img className="block max-w-none size-full" src={imgEllipse} />
      </div>
      <div className="absolute font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] inset-[24.81%_97.4%_68.2%_1.18%] leading-[0] not-italic text-[20px] text-black tracking-[-0.4px]">
        <p className="leading-[0.84]">1</p>
      </div>
      <div className="absolute inset-[24.81%_62.39%_68.05%_33.83%]">
        <img className="block max-w-none size-full" src={imgEllipse} />
      </div>
      <div className="absolute inset-[24.81%_24.39%_68.05%_71.83%]">
        <img className="block max-w-none size-full" src={imgEllipse} />
      </div>
      <div className="absolute font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] inset-[24.96%_62.86%_68.05%_35.01%] leading-[0] not-italic text-[20px] text-black tracking-[-0.4px]">
        <p className="leading-[0.84]">2</p>
      </div>
      <div className="absolute font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] inset-[24.96%_25.26%_68.05%_72.62%] leading-[0] not-italic text-[20px] text-black tracking-[-0.4px]">
        <p className="leading-[0.84]">3</p>
      </div>
    </div>
  );
}

function Group1449234888() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[282px] left-0 top-0 w-[533px]" data-name="ChatGPT Image 10 сент. 2025 г., 17_16_18 1">
        <ChatGptImage1020251716181 />
      </div>
      <div className="absolute font-['Random_Grotesque_Standard_Semibold:StandardSemibold',_sans-serif] inset-[7.45%_4.13%_73.76%_71.86%] leading-[0.84] not-italic text-[0px] text-black tracking-[-0.24px]">
        <p className="mb-0 text-[12px]">
          {`Глэмпинг забронирован `}
          <br aria-hidden="true" />
          и ждёт гостей
        </p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p className="text-[#929291] text-[10px]">{`Можно отправляться на отдых `}</p>
      </div>
    </div>
  );
}

function Group1449234893() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1449234888 />
    </div>
  );
}

export default function Frame2087328694() {
  return (
    <div className="relative size-full">
      <Group1449234893 />
    </div>
  );
}