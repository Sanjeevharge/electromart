import { Link } from 'react-router-dom';

type Props = {
  title: string;
  link: string;
};

const AccessoryCategoryCard = ({ title, link }: Props) => {
  return (
    <Link to={link} className="block rounded-lg border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
    </Link>
  );
};

export default AccessoryCategoryCard;
