import jumpForceIcon from '@/assets/jump-force-icon.jpg';

const Pokeball = () => {
  return (
    <div className="pokeball-wrap w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] max-[480px]:w-[150px] max-[480px]:h-[150px] mx-auto mb-8 relative">
      <div className="pokeball-glow w-full h-full rounded-2xl overflow-hidden">
        <img
          src={jumpForceIcon}
          alt="Jump Force"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Pokeball;
