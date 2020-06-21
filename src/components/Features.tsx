import React from 'react';

const iconSvg = <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m481.081 438.5h-450.162c-17.076 0-30.919-13.843-30.919-30.919v-270.479h512v270.479c0 17.076-13.843 30.919-30.919 30.919z" fill="#a9dbf5"/><path d="m481.095 137.102v301.398c17.069 0 30.905-13.849 30.905-30.932v-270.466z" fill="#88c3e0"/><g fill="#43809f"><path d="m103.87 233.967c-2.929-2.928-7.678-2.928-10.606 0l-46.431 46.431c-2.929 2.93-2.929 7.678 0 10.607l45.816 45.816c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196c2.929-2.93 2.929-7.678 0-10.607l-40.513-40.513 41.127-41.127c2.93-2.929 2.93-7.678.001-10.607z"/><path d="m264.52 280.397-46.431-46.431c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l41.127 41.127-40.513 40.513c-2.929 2.93-2.929 7.678 0 10.607 1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l45.817-45.816c2.928-2.929 2.928-7.677 0-10.607z"/><path d="m185.813 206.063c-3.874-1.471-8.203.477-9.673 4.351l-54.902 144.638c-1.47 3.872.478 8.203 4.35 9.673.876.333 1.775.49 2.66.49 3.025 0 5.876-1.844 7.013-4.841l54.902-144.638c1.47-3.872-.477-8.203-4.35-9.673z"/></g><path d="m386.318 234.23h-48.419c-8.534 0-15.453-6.918-15.453-15.453 0-8.534 6.918-15.453 15.453-15.453h48.419c8.534 0 15.453 6.918 15.453 15.453 0 8.534-6.919 15.453-15.453 15.453z" fill="#29cef6"/><path d="m465.642 296.041h-127.743c-8.534 0-15.453-6.918-15.453-15.453 0-8.534 6.918-15.453 15.453-15.453h127.742c8.534 0 15.453 6.918 15.453 15.453.001 8.534-6.918 15.453-15.452 15.453z" fill="#ffc328"/><path d="m427.695 357.852h-89.796c-8.534 0-15.453-6.918-15.453-15.453 0-8.534 6.918-15.453 15.453-15.453h89.796c8.534 0 15.453 6.918 15.453 15.453 0 8.534-6.919 15.453-15.453 15.453z" fill="#f78e36"/><path d="m512 147.737h-512v-43.318c0-17.076 13.843-30.919 30.919-30.919h450.162c17.076 0 30.919 13.843 30.919 30.919z" fill="#43809f"/><path d="m481.095 73.5v74.237h30.905v-43.305c0-17.083-13.837-30.932-30.905-30.932z" fill="#3a7190"/><circle cx="49.455" cy="111.126" fill="#29cef6" r="15.453"/><circle cx="109.37" cy="111.126" fill="#f3f3f3" r="15.453"/><circle cx="169.285" cy="111.126" fill="#f78e36" r="15.453"/></g></svg>;

function Features() {
  return (
    <section className="c-features">
      <h2 className="c-features__title">Lorem ipsum dolor sit & amet consectetur.</h2>
      <div className="c-features__grid">
        <div className="c-features__grid__card">
          <div className="c-features__grid__card-icon">{iconSvg}</div>
          <div className="c-features__grid__card-content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ipsa fugiat dolores nisi repellendus culpa mollitia.</p>
          </div>
        </div>
        <div className="c-features__grid__card">
          <div className="c-features__grid__card-icon">{iconSvg}</div>
          <div className="c-features__grid__card-content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ipsa fugiat dolores nisi repellendus culpa mollitia.</p>
          </div>
        </div>
        <div className="c-features__grid__card">
          <div className="c-features__grid__card-icon">{iconSvg}</div>
          <div className="c-features__grid__card-content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ipsa fugiat dolores nisi repellendus culpa mollitia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;