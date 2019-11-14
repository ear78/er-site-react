import React from 'react'
import Button from '../../components/Button/Button'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ParaText from '../../components/ParaText/ParaText'

class Resume extends React.Component {
  render() {
    return (
      <div>
        <SectionWrapper alignment='center'>
          <SectionTitle>Experience</SectionTitle>
          <Button
            btnBg={true}
            btnLrg={true}>Download Resume</Button>
          <ParaText
            marginTop={true}
            align="center">Please feel free to click the download button to preview or download my resume to your computer.<br/>  Thanks for your interest!</ParaText>
        </SectionWrapper>
        <div style={{height: '1px', background: '#ededed'}}></div>
      </div>
    )
  }
}

export default Resume
