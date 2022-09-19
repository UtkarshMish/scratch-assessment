import React from "react";
import { BlocklyWorkspace } from "react-blockly";

const toolboxCategories = {
	kind: "categoryToolbox",
	contents: [
		{
			kind: "category",
			name: "Motion",
			colour: 210,
			contents: [
				{
					kind: "block",
					blockxml: '<block type="logic_compare"><field name="OP">EQ</field></block>'
				},
				{
					kind: "block",
					blockxml:
						'<block type="logic_operation"><field name="OP">AND</field></block>'
				},
				{
					kind: "block",
					type: "logic_negate"
				}
			]
		},

		{
			kind: "category",
			name: "Looks",
			colour: 259,
			contents: [
				{
					kind: "block",
					blockxml:
						'    <block type="lists_indexOf">\n' +
						'      <field name="END">FIRST</field>\n' +
						'      <value name="VALUE">\n' +
						'        <block type="variables_get">\n' +
						'          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
						"        </block>\n" +
						"      </value>\n" +
						"    </block>\n"
				},
				{
					kind: "block",
					blockxml:
						'    <block type="lists_repeat">\n' +
						'      <value name="NUM">\n' +
						'        <shadow type="math_number">\n' +
						'          <field name="NUM">5</field>\n' +
						"        </shadow>\n" +
						"      </value>\n" +
						"    </block>\n"
				},

				{
					kind: "block",
					blockxml:
						'    <block type="lists_sort">\n' +
						'      <field name="TYPE">NUMERIC</field>\n' +
						'      <field name="DIRECTION">1</field>\n' +
						"    </block>\n"
				}
			]
		},
		{
			kind: "category",
			name: "Control",
			colour: 120,
			contents: [
				{
					kind: "block",
					type: "controls_if"
				},
				{
					kind: "block",
					blockxml:
						'<block type="controls_repeat_ext">\n' +
						'      <value name="TIMES">\n' +
						'        <shadow type="math_number">\n' +
						'          <field name="NUM">10</field>\n' +
						"        </shadow>\n" +
						"      </value>\n" +
						"    </block>"
				},
				{
					kind: "block",
					blockxml:
						'    <block type="controls_whileUntil">\n' +
						'      <field name="MODE">WHILE</field>\n' +
						"    </block>"
				},
				{
					kind: "block",
					blockxml:
						'    <block type="controls_for">\n' +
						'      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n' +
						'      <value name="FROM">\n' +
						'        <shadow type="math_number">\n' +
						'          <field name="NUM">1</field>\n' +
						"        </shadow>\n" +
						"      </value>\n" +
						'      <value name="TO">\n' +
						'        <shadow type="math_number">\n' +
						'          <field name="NUM">10</field>\n' +
						"        </shadow>\n" +
						"      </value>\n" +
						'      <value name="BY">\n' +
						'        <shadow type="math_number">\n' +
						'          <field name="NUM">1</field>\n' +
						"        </shadow>\n" +
						"      </value>\n" +
						"    </block>\n"
				},
				{
					kind: "block",
					blockxml:
						'    <block type="controls_forEach">\n' +
						'      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n' +
						"    </block>\n"
				}
			]
		},
		{
			kind: "category",
			name: "Events",
			colour: 230,
			contents: [
				{
					kind: "block",
					blockxml:
						'    <block type="math_round">\n' +
						'      <field name="OP">Move</field>\n' +
						'      <value name="NUM">\n' +
						'        <shadow type="math_number">\n' +
						'          <field name="NUM">3.1</field>\n' +
						"        </shadow>\n" +
						"      </value>\n" +
						"    </block>\n"
				},

				{
					kind: "block",
					blockxml:
						'    <block type="math_on_list">\n' +
						'      <mutation op="SUM"></mutation>\n' +
						'      <field name="OP">SUM</field>\n' +
						"    </block>\n"
				}
			]
		}
	]
};
//const workspaceConfigurations: any = {};
export default function MidArea() {
	const [xml, setXml] = React.useState<string>("");
	return (
		<BlocklyWorkspace
			toolboxConfiguration={toolboxCategories as any}
			className="blockly__workspace"
			initialXml={xml}
			workspaceConfiguration={{
				column: true,
				disable: false,
				sounds: false,
				trashcan: false,
				drag: true,
				wheel: true,
				zoom: { controls: false }
			}}
			//#endregion
			onInject={(workspace) => {
				workspace.setResizesEnabled(false);
				const flyout = workspace.getFlyout();

				if (flyout) {
					flyout.autoClose = false;
				}
			}}
			onXmlChange={setXml}
		/>
	);
}
