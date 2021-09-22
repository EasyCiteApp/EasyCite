import Interweave from 'interweave';

const Preview = ({citeInfo}) => {
  const data = "  <div class=\"csl-entry\">\n    <div class=\"csl-left-margin\">[1]</div><div class=\"csl-right-inline\">Tom Howell Jr., “Biden gets tough on unvaccinated ‘minority’ with mandates, pivots from Afghanistan mess,” <i>The Washington Times</i>, Sep. 12, 2021. https://www.washingtontimes.com/news/2021/sep/11/biden-gets-tough-unvaccinated-minority-mandates-pi/ (accessed Sep. 22, 2021).</div>\n  </div>\n";
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div
        href="https://nextjs.org/docs"
        className="p-6 mt-6 text-left border w-full rounded-xl hover:text-gray-800 focus:text-gray-800"
      >
        <h3 className="text-xl font-bold">Citation Preview</h3>
        <div className="mt-4 text-base font-light">
          <Interweave content={citeInfo}/>
        </div>
      </div>
    </div>
  );
};

export default Preview;
