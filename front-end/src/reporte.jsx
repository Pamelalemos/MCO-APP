
const MedicalRecordForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    surgeryType: "",
    anesthesiaType: "",
    // Otros campos del formulario
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST al servidor de Express para guardar el registro médico
      const response = await api.post("/api/medical-records", formData);
      console.log(response.data); // Respuesta del servidor
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        {/* ... (campos del formulario) */}
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          placeholder="Fecha"
        />
        <input
          type="text"
          name="surgeryType"
          value={formData.surgeryType}
          onChange={handleInputChange}
          placeholder="Tipo de cirugía"
        />
        <input
          type="text"
          name="anesthesiaType"
          value={formData.anesthesiaType}
          onChange={handleInputChange}
          placeholder="Tipo de anestesia"
        />
        {/* ... (otros campos del formulario) */}
        <Button type="submit">Guardar</Button>
      </form>
    </div>
  );
};

export default MedicalRecordForm;
