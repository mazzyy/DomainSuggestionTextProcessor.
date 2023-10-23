import React from 'react';

function Domainbox(props) {
  // Extract the 'domain' and 'extensions' from the props
  const { domain, extensions,key } = props;

  return (
    <div className="adopt mx-3 rounded text-light my-4 py-2">
    <span className="d-flex p-2">
      <div className="d-flex pl-2 border-bottom vw-100">
        #{key} | <span className="text-center px-2 milky">
          <strong>{domain}</strong>
        </span>
      </div>
    </span>
    <div className="d-flex pl-2">
      <div className="d-flex m-1 vw-100">
        <span className="bg-info bold rounded clipy px-2">Popular Extensions</span>
        <span className="pl-3">
          {/* {`${domain}.com: ${extensions['.com'] ? 'Not Available' : 'Available'} | ${domain}.net: ${extensions['.net']} | ${domain}.org: ${extensions['.org']}`} */}
        
          {`${domain}.com: ${extensions['.com'] === 'true' ? 'Not Available' : ' Available'} | ${domain}.net: ${extensions['.net'] === 'true' ? 'Not Available' : ' Available'} | ${domain}.org: ${extensions['.org'] === 'true' ? ' Not Available' : 'Available'}`}

        </span>
      </div>
    </div>
    <div className="d-flex pl-2">
      <div className="d-flex m-1 vw-100">
        <span className="bg-info bold rounded clipy pl-2 pr-4">Other Extensions</span>
        <span className="pl-3">

          {`${domain}.xyz: ${extensions['.xyz'] === 'true' ? 'Not Available' : ' Available'} | ${domain}.mil: ${extensions['.mil'] === 'true' ? 'Not Available' : ' Available'} | ${domain}.biz: ${extensions['.biz'] === 'true' ? ' Not Available' : 'Available'}`}

        </span>
      </div>
    </div>
  </div>
  
  );
}

export default Domainbox;
