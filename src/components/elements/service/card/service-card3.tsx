import Image from "next/image";

type Props = {
  service: {
    data: {
      title: string;
      short_description: string;
      image: string;
    };
  };
};

const ServiceCard3 = ({ service }: Props) => {
  const { title, short_description, image } = service.data;
  return (
    <div className="bg-sec_bg-2 rounded-[22px] h-full text-center pt-[35px] 2xl:pt-[50px] pb-[38px] 2xl:pb-[48px] px-[20px] 2xl:px-[50px]">
      <div>
        <Image
          width={60}
          height={60}
          src={image}
          className="h-[60px] mx-auto"
          alt="feature icon"
        />
      </div>
      <div className="mt-[41px] 2xl:mt-[51px]">
        <h3 className="text-[26px] 2xl:text-[30px] leading-[1.16] max-w-[80%] mx-auto">
          {title}
        </h3>
        <p className="mt-[20px]">{short_description}</p>
      </div>
    </div>
  );
};

export default ServiceCard3;
