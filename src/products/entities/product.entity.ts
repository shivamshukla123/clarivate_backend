import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    ProductId: number;

    @Column()
    ProductName: string;

    @Column()
    Description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    Price: number;

    @Column()
    StockQuantity: number;

    // @Column({ nullable: false })
    // CategoryId: number;

    // @OneToOne(() => Category)
    // @JoinColumn({ name: 'CategoryId' })
    // Category: Category;

    @ManyToOne(() => Category, { eager: true })  // 👈 Many-to-One relationship
    @JoinColumn({ name: 'CategoryId' }) // 👈 Explicitly map categoryId as a foreign key
    category: Category;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    CreatedAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    UpdatedAt: Date;
}
