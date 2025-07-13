import React from 'react'
import Hero from '../components/Hero'
import MissionandAudience from '../components/MissionandAudience'
import FeaturesIntro from '../components/FeaturesIntro'
import AddGoalIntro from '../components/AddGoalIntro'
import ExploreFeatures from '../components/ExploreFeatures'

const StackLog = () => {
  return (
    
     <main>
        <Hero />
        <MissionandAudience/>
        <FeaturesIntro/>
        <AddGoalIntro/>
        <ExploreFeatures/>
        {/* Other sections... */}

      </main>
  )
}

export default StackLog