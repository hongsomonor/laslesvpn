import React from 'react';

const Network = () => {
  return (
    <section className="network" id="network" role="region" aria-label="Global Network">
      <div className="network-container">
        <div className="network-header">
          <h2 className="network-title">
            Huge Global Network<br />of Fast VPN
          </h2>
          <p className="network-subtitle">
            See LaslesVPN everywhere to make it easier for you when you move<br />
            locations.
          </p>
        </div>

        {/* World Map with server locations */}
        <div className="network-map" aria-hidden="true">
          <svg width="900" height="450" viewBox="0 0 900 450" fill="none">
            {/* Simplified world map background */}
            <g fill="#F0F0F0">
              {/* North America */}
              <path d="M80 120 Q120 80 200 100 Q280 90 320 140 Q300 180 250 200 Q180 210 120 180 Q80 150 80 120Z" />
              {/* South America */}
              <path d="M200 250 Q240 230 260 280 Q270 330 240 380 Q200 400 180 350 Q170 300 200 250Z" />
              {/* Europe */}
              <path d="M380 100 Q420 80 480 100 Q520 120 500 150 Q460 170 420 160 Q380 140 380 100Z" />
              {/* Africa */}
              <path d="M400 200 Q460 180 500 220 Q520 280 480 340 Q420 360 380 320 Q360 260 400 200Z" />
              {/* Asia */}
              <path d="M520 80 Q620 60 720 100 Q780 140 760 200 Q700 240 620 220 Q540 200 520 140 Q500 100 520 80Z" />
              {/* Australia */}
              <path d="M700 300 Q780 280 820 320 Q840 360 800 380 Q740 390 700 360 Q680 330 700 300Z" />
            </g>

            {/* Server location dots - larger circles with red outline */}
            <g>
              {/* North America */}
              <circle cx="150" cy="130" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="150" cy="130" r="4" fill="#FF385C"/>
              
              <circle cx="280" cy="110" r="10" fill="#FF385C" opacity="0.3"/>
              <circle cx="280" cy="110" r="5" fill="#FF385C"/>
              
              <circle cx="220" cy="170" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="220" cy="170" r="4" fill="#FF385C"/>
              
              {/* South America */}
              <circle cx="220" cy="320" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="220" cy="320" r="4" fill="#FF385C"/>
              
              {/* Europe */}
              <circle cx="420" cy="130" r="10" fill="#FF385C" opacity="0.3"/>
              <circle cx="420" cy="130" r="5" fill="#FF385C"/>
              
              <circle cx="460" cy="110" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="460" cy="110" r="4" fill="#FF385C"/>
              
              <circle cx="500" cy="140" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="500" cy="140" r="4" fill="#FF385C"/>
              
              {/* Africa */}
              <circle cx="450" cy="260" r="10" fill="#FF385C" opacity="0.3"/>
              <circle cx="450" cy="260" r="5" fill="#FF385C"/>
              
              <circle cx="480" cy="300" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="480" cy="300" r="4" fill="#FF385C"/>
              
              {/* Asia */}
              <circle cx="580" cy="120" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="580" cy="120" r="4" fill="#FF385C"/>
              
              <circle cx="650" cy="150" r="10" fill="#FF385C" opacity="0.3"/>
              <circle cx="650" cy="150" r="5" fill="#FF385C"/>
              
              <circle cx="720" cy="130" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="720" cy="130" r="4" fill="#FF385C"/>
              
              <circle cx="600" cy="200" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="600" cy="200" r="4" fill="#FF385C"/>
              
              <circle cx="700" cy="190" r="10" fill="#FF385C" opacity="0.3"/>
              <circle cx="700" cy="190" r="5" fill="#FF385C"/>
              
              {/* Australia */}
              <circle cx="750" cy="330" r="10" fill="#FF385C" opacity="0.3"/>
              <circle cx="750" cy="330" r="5" fill="#FF385C"/>
              
              <circle cx="780" cy="350" r="8" fill="#FF385C" opacity="0.3"/>
              <circle cx="780" cy="350" r="4" fill="#FF385C"/>
            </g>
          </svg>
        </div>

        {/* Partner logos */}
        <div className="partners">
          <div className="partner-logo netflix">
            <svg viewBox="0 0 120 30" fill="currentColor">
              <text x="0" y="22" fontSize="18" fontWeight="bold" fill="#E50914">NETFLIX</text>
            </svg>
          </div>
          <div className="partner-logo reddit">
            <svg viewBox="0 0 80 30" fill="currentColor">
              <circle cx="12" cy="15" r="10" fill="#FF4500" opacity="0.3"/>
              <text x="25" y="20" fontSize="14" fill="#888">reddit</text>
            </svg>
          </div>
          <div className="partner-logo amazon">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="0" y="20" fontSize="16" fontWeight="bold" fill="#FF9900">amazon</text>
            </svg>
          </div>
          <div className="partner-logo discord">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <text x="25" y="20" fontSize="14" fill="#7289DA">discord</text>
            </svg>
          </div>
          <div className="partner-logo spotify">
            <svg viewBox="0 0 100 30" fill="currentColor">
              <circle cx="12" cy="15" r="10" fill="#1DB954" opacity="0.3"/>
              <text x="25" y="20" fontSize="14" fill="#888">Spotify</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
