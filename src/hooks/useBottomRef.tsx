import { useEffect, useMemo, useRef } from "react";

const useBottomRef = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useRef<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver((entries: Array<IntersectionObserverEntry>) => {
        isIntersecting.current = entries[0].isIntersecting;
      }, {}),
    []
  );

  const scrollToBottom = () => {
    setTimeout(() => {
      bottomRef.current.scrollIntoView({
        block: "end",
      });
    }, 100);
  };

  useEffect(() => {
    if (!bottomRef.current) return;

    observer.observe(bottomRef.current);
    scrollToBottom();
  }, [bottomRef.current]);

  return {
    isIntersecting: isIntersecting.current,
    bottomRef: <div ref={bottomRef} />,
  };
};

export default useBottomRef;
