import GDPChart from '@/components/countries/gdp';
import { commonMetaData } from '@/utils';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: 'Country GDP',
    desc: 'Explore the GDP of different countries using Globe Graph.',
    url: '/gdp',
    keywords: ['geo chart', 'gdp', 'gross domestic product', 'country gdp'],
  });
  return {
    ...metaData,
  };
};

const CountryGDPPage = () => {
  return (
    <main>
      <section className="p-1">
        <GDPChart />
      </section>
    </main>
  );
};

export default CountryGDPPage;
