
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const TreeGraph = dynamic(() => import('@components/treeGraph'), {
    ssr: false,
});

const MedicalExpertChat: NextPage = () => {
    return <TreeGraph />;
};

export default MedicalExpertChat;
