import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#78C2DD',
    fontSize: 32,
    fontFamily: 'Lemon_400Regular',
    marginTop: 48,
    textAlign: 'center'
  },
  eventName2: {
    color: '#644D83',
    fontSize: 32,
    fontFamily: 'Lemon_400Regular',
    marginTop: 48,
  },
  progressText: {
    marginVertical: 8,
    fontSize: 16,
    color: "#6B6B6B",
    
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#2F2F32",
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 6
  },
  buttonText: {
    color: '#FFFD',
    fontSize: 24, 
    lineHeight: 25, 
    borderWidth: 2,
    width: 21,
    height: 21,
    borderRadius: 27, 
    backgroundColor: '#1761A0',
    textAlign: 'center',
    borderColor: '#FFFD',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1761A0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    backgroundColor: '#131016',
  },
  filterButtonCounter: {
    backgroundColor: "#2F2F32", // Cor de fundo para o número
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
   
  },
  filterButtonTextCounter: {
    color: "#FFFFFF", // Cor do texto (branca para contraste)
    fontWeight: "bold",
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
    flexDirection: "row"
  },
  activeFilterButton: {
    flexDirection: "row"
  },
  filterButtonText1: {
    color: "#78C2DD",
    fontWeight: "bold",
    fontSize: 18
  },
  filterButtonText2: {
    color: "#644D83",
    fontWeight: "bold",
    fontSize: 18
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2F2F32", // Cor cinza claro
    padding: 25, // Adiciona algum padding
    borderRadius: 8, // Adiciona bordas arredondadas
    marginVertical: 5, // Espaçamento vertical entre as tarefas
    marginBottom: 8,
    gap: 8
  },
  taskName: {
    flex: 1,
    fontSize: 16,
    color: "#bbb",
    textTransform: "capitalize"
  },
  checkBox:{
    width: 21,
    height: 21,
    borderRadius: 27,
    borderColor: "#78C2DD"
    
  },
  taskCompletedText: {
    textDecorationLine: "line-through",
    color: "#bbb",
    
  },
})
