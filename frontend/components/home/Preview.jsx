import Interweave from 'interweave';

const Preview = () => {
  const data = "<div class=\"csl-entry\">(2021) <i>Biden gets tough on unvaccinated ‘minority’ with mandates, pivots from Afghanistan mess</i>, <i>The Washington Times</i>. The Washington Times. Available at: https://www.washingtontimes.com/news/2021/sep/11/biden-gets-tough-unvaccinated-minority-mandates-pi/ (Accessed: 22 September 2021).</div>\n";
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <a
        href="https://nextjs.org/docs"
        className="p-6 mt-6 text-left border w-full rounded-xl hover:text-indigo-600 focus:text-indigo-600"
      >
        <h3 className="text-xl font-bold">Citation Preview</h3>
        <div className="mt-4 text-base font-light">
          <Interweave content={data}/>
        </div>
      </a>
    </div>
  );
};

export default Preview;
