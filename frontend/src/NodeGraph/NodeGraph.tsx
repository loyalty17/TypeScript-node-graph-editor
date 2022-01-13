import { Edge, NodeData } from "~/src/lib/types";
import { calculateNodeSize } from "~/src/NodeGraph/Node";

export class NodeGraph {
    nodes: NodeData[];
    edges: Edge[];

    constructor(nodes: NodeData[] = [], edges: Edge[] = []) {
        this.nodes = nodes.map(n => ({...n, size: calculateNodeSize(n)}));
        this.edges = edges;
    }

    findNode(id: number): NodeData | undefined {
        return this.nodes.find(node => node.node_id === id);
    }

    findNodeIndex(id: number): number {
        return this.nodes.findIndex(node => node.node_id === id);
    }
}
