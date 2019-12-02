### Oversettelser

Sett hvilke språk som skal være tilgjengelig i språkvelger.

```jsx harmony
const DetteKanDuSokeOm: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <DetteKanDuSokeOmBokmal/>}
            {valgtSprak === Sprak.NYNORSK && <DetteKanDuSokeOmNynorsk/>}
            {valgtSprak === Sprak.ENGELSK && <DetteKanDuSokeOmEnglish/>}
        </Oversettelser>
    );
};
```

