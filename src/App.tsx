import {
  ImpersonatorIframe,
  useImpersonatorIframe,
} from "@impersonator/iframe";

function App() {
  const { latestTransaction } = useImpersonatorIframe();
  return (
    <>
      <ImpersonatorIframe
        width={"1000px"}
        height={"500px"}
        src="https://app.uniswap.org"
        address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" // vitalik.eth
        rpcUrl="https://eth.llamarpc.com"
      />
      <div>
        <h1>Latest transaction</h1>
        <pre>{JSON.stringify(latestTransaction, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
