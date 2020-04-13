export default class Stereo {
  public on(): void {
    console.log('Stereo on')
  }

  public off(): void {
    console.log('Stereo off')
  }

  public setCd(): void {
    console.log('Setting cd')
  }

  public setDvd(): void {
    console.log('Setting dvd')
  }

  public setRadio(): void {
    console.log('Setting Radio')
  }

  public setVolume(volume: number): void {
    console.log(`Setting volume to ${volume}`)
  }
}