import jumpForceImage from '@/assets/jump-force.jpg';

const Pokeball = () => {
  return (
    <div className="pokeball-glow relative w-48 h-48">
      <img 
        src={jumpForceImage} 
        alt="Jump Force" 
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
};

export default Pokeball;
