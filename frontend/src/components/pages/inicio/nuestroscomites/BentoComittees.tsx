import { Committee, CommitteesFields } from '@/types/committees';
import { slugify } from '@/lib/utils';
import Comite1 from './Comite1';
import Comite2 from './Comite2';
import Comite3 from './Comite3';
import Comite4 from './Comite4';
import Comite5 from './Comite5';
import Comite6 from './Comite6';

interface BentoComitteesProps {
  comittees: Committee[];
}

export default function BentoComittees({
  comittees,
}: BentoComitteesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-[repeat(auto-fill,1fr)] gap-5">
      <Comite1
        title={comittees[0][CommitteesFields.NAME]}
        path={slugify(comittees[0][CommitteesFields.NAME])}
      >
        {comittees[0][CommitteesFields.EXCERPT]}
      </Comite1>
      <Comite2
        title={comittees[1][CommitteesFields.NAME]}
        path={slugify(comittees[1][CommitteesFields.NAME])}
      >
        {comittees[1][CommitteesFields.EXCERPT]}
      </Comite2>
      <Comite3
        title={comittees[2][CommitteesFields.NAME]}
        path={slugify(comittees[2][CommitteesFields.NAME])}
      >
        {comittees[2][CommitteesFields.EXCERPT]}
      </Comite3>
      <Comite4
        title={comittees[3][CommitteesFields.NAME]}
        path={slugify(comittees[3][CommitteesFields.NAME])}
      >
        {comittees[3][CommitteesFields.EXCERPT]}
      </Comite4>
      <Comite5
        title={comittees[4][CommitteesFields.NAME]}
        path={slugify(comittees[4][CommitteesFields.NAME])}
      >
        {comittees[4][CommitteesFields.EXCERPT]}
      </Comite5>
      <Comite6
        title={comittees[5][CommitteesFields.NAME]}
        path={slugify(comittees[5][CommitteesFields.NAME])}
      >
        {comittees[5][CommitteesFields.EXCERPT]}
      </Comite6>

    </div>
  );
}
