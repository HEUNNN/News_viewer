import { useEffect, useState } from "react";

//Promise를 사용할 때 코드를 더욱 간결하게 작성할 수 있도록 해주는 커스텀 Hook
export default function usePromise(promiseCreator, deps) {
  // 대기 중/대기 완료/대기 실패에 대한 상태관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolvedValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolvedValue = await promiseCreator();
        setResolvedValue(resolvedValue);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);
  return [loading, resolved, error];
}
