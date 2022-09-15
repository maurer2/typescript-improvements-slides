public record Animal(String name, String colour, int numberOfFeet, boolean hasFans, boolean canBeInARoom) implements IMacBookAnimal {
	public String toString() {
		return String.format("%1$s, %2$s, %3$s, %4$s, %5$s", this.name, this.colour, this.numberOfFeet, this.hasFans, this.canBeInARoom);
	}
}
