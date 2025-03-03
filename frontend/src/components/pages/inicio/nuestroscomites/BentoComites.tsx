import Comite1 from './Comite1';
import Comite2 from './Comite2';
import Comite3 from './Comite3';
import Comite4 from './Comite4';
import Comite5 from './Comite5';
import Comite6 from './Comite6';

export default function BentoComites() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-flow-row grid-rows-[repeat(auto-fill,1fr)] gap-5">
      <Comite1 />
      <Comite2 />
      <Comite3 />
      <Comite4 />
      <Comite5 />
      <Comite6 />
    </div>
  );
}
