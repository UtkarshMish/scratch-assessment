import React from "react";
import { BlocklyWorkspace } from "react-blockly";
//const toolboxConfigurations: any = {};
//const workspaceConfigurations: any = {};
export default function MidArea() {
	const [xml, setXml] = React.useState<string | undefined>();
	return (
		<BlocklyWorkspace
			className="blockly__workspace"
			initialXml={xml}
			onXmlChange={setXml}
		/>
	);
}
