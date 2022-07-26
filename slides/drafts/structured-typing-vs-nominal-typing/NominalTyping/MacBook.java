public class MacBook implements IMacBookAnimal {
	private final String name;
	private final String colour;
	private final int numberOfFeet;
	private final boolean hasFans;
	private final boolean canBeInARoom;

	public MacBook(String name, String colour, int numberOfFeet, boolean hasFans, boolean canBeInARoom) {
		this.name = name;
		this.colour = colour;
		this.numberOfFeet = numberOfFeet;
		this.hasFans = hasFans;
		this.canBeInARoom = canBeInARoom;
	}

	public String toString() {
		return String.format("%1$s, %2$s, %3$s, %4$s, %5$s", this.name, this.colour, this.numberOfFeet, this.hasFans,
				this.canBeInARoom);
	}
}
