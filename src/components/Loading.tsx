interface Props {
  message: string;
}

const Loading = ({ message }: Props) => {
  return <div>{message}</div>;
};

export default Loading;
