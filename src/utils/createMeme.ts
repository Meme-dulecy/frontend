export default async function createMeme(
  image: { name: string; file: null | File },
  text: string,
  token: string
): Promise<{
  result?: unknown;
  errMsg?: string;
  errCode?: string;
}> {
  try {
    const formData = new FormData();

    if (image.file !== null) {
      const blob = new Blob([image.file], { type: "image/*" });
      formData.append("img", blob);
    }

    if (text) {
      formData.append("message", text);
    }

    const response: Response = await fetch("http://18.116.27.58:5000/memes", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return response.json() as Promise<{
      result?: unknown;
      errMsg?: string;
      errCode?: string;
    }>;
  } catch (error) {
    alert("밈카드 생성에 실패했습니다.");
    console.error(error);
    throw error;
  }
}
