import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='max-sm:text-center text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
      Fique por dentro das novidades e
        <span className='text-[#ea553b]'> Promoções </span>exclusivas!
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='exemplo@email.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <Button label="Inscreva-se" width="w-[160px]" height="h-[40px]" backgroundColor="bg-[#ea553b]" textColor="text-white" />

        </div>
      </div>
    </section>
  );
};

export default Subscribe;