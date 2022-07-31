import React from 'react'
import './InfoSection.scss'

const InfoSection = () => {
    return (
<div className='info-section'>
<div className="accordion accordion-flush" id="accordionPanelsStayOpenExample" >
  
  <div className="accordion-item" >
    <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       WHAT IS GLOBAL WARMING?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
       <p>
        Global warming is the rise in average temperatures across the globe, which has been ongoing at least since record keeping began in 1880.<br />
        Modern global warming is caused by humans. The burning of fossil fuels has released greenhouse gases into the atmosphere, which trap warmth from the sun and drive up surface and air temperatures. Global warming is a synonym for climate change, though "climate change" has become the preferred term among scientists.
       </p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
        WHAT CAUSED IT?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <p>
         The main driver of today's warming is the combustion of fossil fuels. These hydrocarbons heat up the planet via the greenhouse effect, which is caused by the interaction between Earth's atmosphere and incoming radiation from the sun. <br />
         Simply put, solar radiation hits Earth's surface and then bounces back toward the atmosphere as heat. Gases in the atmosphere trap this heat, preventing it from escaping into the void of space. In a paper presented in 1895, Arrhenius figured out that greenhouse gases such as carbon dioxide could trap heat close to the Earth's surface, and that small changes in the amount of those gases could make a big difference in how much heat is trapped.
        </p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        GREENHOUSE GASES 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
       <p>
        Since the beginning of the Industrial Revolution, humans have been rapidly changing the balance of gases in the atmosphere. Burning fossil fuels like coal and oil releases water vapor, carbon dioxide (CO2), methane (CH4), ozone and nitrous oxide (N2O), which are considered the primary greenhouse gases. Carbon dioxide is the most common greenhouse gas. Between about 800,000 years ago and the beginning of the Industrial Revolution, CO2's presence in the atmosphere amounted to about 280 parts per million (ppm, meaning there were about 280 molecules of CO2 in the air per every million air molecules). As of 2020 (the last year when full data are available), the average CO2 in the atmosphere was 412.5 ppm, according to the National Centers for Environmental Information(opens in new tab). 
       </p>
      </div>
    </div>
  </div>
 
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      WHAT ARE THE EFFECTS?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div className="accordion-body">
        <p>
          Global warming doesn't just mean warming, which is why "climate change" has become the favored term among researchers and policymakers. While the globe is becoming hotter on average, this temperature increase can have paradoxical effects, such as more frequent and severe snowstorms. Climate change can and will affect the globe in several big ways: by melting ice, by drying out already-arid areas, by causing weather extremes and by disrupting the delicate balance of the oceans.
        </p>
      </div>
   </div>
</div>

</div>
</div>
  )
}

export default InfoSection

