import Container from 'components/Container'
import useBuildURLImport from 'hooks/useBuildURLImport'
import React, { ReactElement, useState } from 'react'
import { FaCog } from 'react-icons/fa'

import BuildSelector from './BuildSelector'
import { ConfigContainer, SettingsButton, VersionContainer, VersionText } from './Home-Elements'
import BuildsPanel from './Panel/BuildsPanel'
import SettingsPanel from './Panel/SettingsPanel'
import Tabs from './Tabs/Tab'

export interface HoverInfo {
	title: string;
	description?: string[];
	table?: ReactElement;
}

export interface LoadedBuild {
	data: string;
	addNewBuild: boolean;
}

const Home: React.FC = () => {

	const [toggleBuilds, setToggleBuilds] = useState(false)

	const [toggleSettings, setToggleSettings] = useState(false)

	const [loadedBuild, setLoadedBuild] = useState<LoadedBuild>({ data: '', addNewBuild: false })
	useBuildURLImport(loadedBuild.data, loadedBuild.addNewBuild)

	return (
		<>
			<BuildsPanel
				toggleBuilds={toggleBuilds}
				setToggleBuilds={setToggleBuilds}
				setLoadedBuild={setLoadedBuild}
			/>
			<SettingsPanel
				toggleSettings={toggleSettings}
				setToggleSettings={setToggleSettings}
				setLoadedBuild={setLoadedBuild}
			/>
			<Container
				columns='2fr 1fr 1fr 1fr'
				rows='calc(100% - 3rem) 3rem'
				areas='"stats character weapons abilities" "version config config config"'
				backButton={false}
			>

				<Tabs />

				<ConfigContainer>

					<BuildSelector
						toggleBuilds={toggleBuilds}
						setToggleBuilds={setToggleBuilds}
						setToggleSettings={setToggleSettings}
						setLoadedBuild={setLoadedBuild}
					/>

					<SettingsButton onClick={() => {
						setToggleBuilds(false)
						setToggleSettings(!toggleSettings)
					}}> <FaCog /> </SettingsButton>

				</ConfigContainer>

				<VersionContainer>
					<VersionText>Payday Version: 207</VersionText>
					<VersionText>Builder Version: 0.2.2</VersionText>
				</VersionContainer>

			</Container>
		</>
	)
}

export default Home
