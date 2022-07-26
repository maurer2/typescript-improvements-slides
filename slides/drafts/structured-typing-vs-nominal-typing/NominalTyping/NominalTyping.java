import java.util.Arrays;
import java.util.List;

public class NominalTyping {
	public static void main(String[] args) {
		var macBookPro = new MacBook("Mac", "gray", 4, true, true);
		var elephant = new Animal("Benjamin", "gray", 4, true, true);

		// List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error
		List<IMacBookAnimal> listOfMacBooks2 = Arrays.asList(macBookPro, elephant); // no error

		// System.out.println(listOfMacBooks);
		System.out.println(listOfMacBooks2);
	}
}
