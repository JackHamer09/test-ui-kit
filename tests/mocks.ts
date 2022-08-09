import type { NetworkConfiguration } from "@/composables/useRemoteConfig";

export const GOERLI_NETWORK: NetworkConfiguration = {
  name: "goerli",
  apiUrl: "",
  l2NetworkName: "Goerli",
  l2WalletUrl: "",
  l2BridgeUrl: "",
  l1ExplorerUrl: "",
  maintenance: false,
  published: true,
  hostnames: [],
};
export const GOERLI_BETA_NETWORK: NetworkConfiguration = {
  name: "goerli-beta",
  apiUrl: "",
  l2NetworkName: "Goerli Beta",
  l2WalletUrl: "",
  l2BridgeUrl: "",
  l1ExplorerUrl: "",
  maintenance: false,
  published: true,
  hostnames: ["https://staging-scan-v2.zksync.dev/"],
};
