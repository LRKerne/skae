import { ResponsiveContainer, RadarChart,PolarGrid,PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from "recharts"

const Chart = (userData: any) => {
  const data = [
    {
      "subject": "Pensamento Critico",
      "A": 5,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Comunicacao",
      "A": 4,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Trabalho em Equipe",
      "A": 3,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Perspectiva Etica",
      "A": 5,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Inteligencia Emocional",
      "A": 7,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Pensamento Criativo",
      "A": 4,
      "B": 7,
      "fullMark": 10
    }
  ]
  
  return (
    <div className="chart-wrapper">
      <h3 className="title">Grafico User X Ideal</h3>
      <ResponsiveContainer width="80%" aspect={7/1} >
        <RadarChart outerRadius={50} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />
          <Radar
            name="User"
            dataKey="A"
            stroke="#0086b3"
            fill="#0086b3"
            fillOpacity={0.6}
          />
          <Radar
            name="Ideal"
            dataKey="B"
            stroke="#74dafc"
            fill="#74dafc"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;