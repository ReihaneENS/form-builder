export interface FormField {
    id: string;
    type: 'short' | 'long' | 'single' | 'multiple' | 'list' | 'file';
    title: string;
    required: boolean;
    options?: string[];
    description?: string;
}

export interface FormSection {
    id: string;
    title: string;
    fields: FormField[];
}

export interface Form {
    id: string;
    title: string;
    description?: string;
    sections: FormSection[];
    category: string;
}