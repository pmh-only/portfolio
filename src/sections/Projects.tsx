import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import ProjectDescripts from './ProjectDescripts'
import ProjectCard from '../components/ProjectCard'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Projects () {
  const [enabled, setEnabled] = useState(false)
  const [selected, setSelected] = useState(-1)
  const { i18n } = useTranslation()

  return (
    <section style={{ scrollSnapAlign: 'start' }}>
      <Container className="p-5">
        <h1 className="text-xl border-b-2 inline-block p-2">Projects. & Collaborations.</h1>

        <div className="block xl:flex">
          <ScrollContainer className={selected >= 0 ? 'xl:w-1/2' : 'w-full'} hideScrollbars={false}>
            <div className={'flex items-center justify-items-stretch justify-between xl:flex-wrap overflow-y-visible xl:overflow-hidden gap-5 p-5 w-full'}>
              <ProjectCard index={0} selected={selected} setSelected={setSelected} title="청라온 CMS" subtitle="청소년 신문사 CMS" background="/projects/cheongraon.gif" />
              <ProjectCard index={1} selected={selected} setSelected={setSelected} title="BlobBlocks" subtitle="바이너리 통신을 위한 블럭체인" background="/projects/blockchain.gif" />
              <ProjectCard index={2} selected={selected} setSelected={setSelected} title="HandyEdu" subtitle="움직여보고 연결하며 배우는 정보보안" background="/projects/handyedu.png" />
              <ProjectCard index={3} selected={selected} setSelected={setSelected} title="gohttpfs" subtitle="빠른 웹 파일 시스템" background="/projects/gohttpfs.gif" />
              <ProjectCard index={4} selected={selected} setSelected={setSelected} title="Outgo" subtitle="기숙사 출사 관리 시스템" background="/projects/outgo.jpg" />
              <ProjectCard index={5} selected={selected} setSelected={setSelected} title="School Computer Security (SCS)" subtitle="학급 내 정보화기기 관리 페이지 및 프로그램 서비스" background="/projects/scs.gif" />
              <ProjectCard index={6} selected={selected} setSelected={setSelected} title="Covid Check" subtitle="쉽고 빠른 발열 체크 기록 및 전산 시스템" background="/projects/covidcheck.gif" />
              <ProjectCard index={7} selected={selected} setSelected={setSelected} title="LofiGirl" subtitle="디스코드 플랫폼을 통한 24시간 음악 스트리밍 서비스" background="/projects/lofigirl.gif" />
              <ProjectCard index={8} selected={selected} setSelected={setSelected} title="Coffee Machine" subtitle="웹 대시보드를 통해 쉽게 사용가능한 음악 스트리밍 서비스" background="/projects/coffeemachine.gif" />
              <ProjectCard index={9} selected={selected} setSelected={setSelected} title="Cube jump" subtitle="3D 원근감을 이용해가며 앞으로 나아가는 유니티 게임" background="/projects/unityLearn.gif" />
              <ProjectCard index={10} selected={selected} setSelected={setSelected} title="GBSW OAuth2" subtitle="OAuth2 표준을 준수한 학생 통합 로그인 시스템" background="/projects/oauth2.png" />
              <ProjectCard index={11} selected={selected} setSelected={setSelected} title="TodayStudy" subtitle="아침 자습 시간을 더욱 효율적으로 만들어주는 시스템" background="/projects/todaystudy.gif" />
              <ProjectCard index={12} selected={selected} setSelected={setSelected} title="@dimigo/excel" subtitle="간단한 엑셀 xlsx 파일 파서" background="/projects/dimigo-excel.gif" />
            </div>
          </ScrollContainer>
          {selected >= 0 &&
            <div className="w-full transition-all ease-linear">
              <div className="top-0 py-5 sticky">
                <div className="bg-white shadow w-full p-5">
                  {i18n.language === 'en-US' && !enabled
                    ? <div className="w-auto items-center h-screen flex flex-col justify-center top-5 sticky z-30 text-center select-none">
                        <h1>Explanation only supports Korean, yet.</h1>
                        <button className="px-3 py-2 mt-3 bg-blue-500 hover:bg-blue-600 rounded text-white" onClick={() => setEnabled(true)}>I don&apos;t care</button>
                      </div>
                    : (selected === -1 ? <p>왼쪽에서 프로젝트를 클릭해 보세요.</p> : <ProjectDescripts project={selected} />)}
                </div>
              </div>
            </div>}
        </div>
      </Container>
    </section>
  )
}
