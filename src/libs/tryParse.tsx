export function tryParse(data: string | null) : unknown {
  try {
    const dataImSureIsOkay = data!;
    return JSON.parse(dataImSureIsOkay);
  } catch {
    return undefined;
  }
}
