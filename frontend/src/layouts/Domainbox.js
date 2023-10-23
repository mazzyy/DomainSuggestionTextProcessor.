import React from 'react';

function Domainbox(props) {
  // Extract the 'domain' and 'extensions' from the props
  const { domain, extensions } = props;

  return (
    <div className="adopt mx-3 rounded text-light my-4 py-2">
      <span className="d-flex p-2">
        <div className="d-flex pl-2 border-bottom vw-100">
          #1 | <span className="text-center px-2 milky">
            <strong>{domain}</strong>
          </span>
        </div>
      </span>
      <div className="d-flex pl-2">
        <div className="d-flex m-1 vw-100">
          <span className="bg-info bold rounded clipy px-2">Popular Extensions</span>
          <span className="pl-1">
            {`${domain}.com: ${extensions['.com']} | ${domain}.net: ${extensions['.net']} | ${domain}.org: ${extensions['.org']}`}
          </span>
        </div>
      </div>
      <div className="d-flex pl-2">
        <div className="d-flex m-1 vw-100">
          <span className="bg-info bold rounded clipy pl-2 pr-4">Other Extensions</span>
          <span className="pl-1">
            {`${domain}.com: ${extensions['.com']} | ${domain}.net: ${extensions['.net']} | ${domain}.org: ${extensions['.org']}`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Domainbox;
